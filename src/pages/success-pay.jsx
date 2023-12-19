import { downloadSource } from "@/helpers/helpers";
import { getMedia } from "@/services/purchase.service";
import { login } from "@/services/user.service";
import { useEffect } from "react";

function SuccessPayPage({ file_name, downloadLink }) {
  useEffect(() => {
    downloadSource(file_name, downloadLink);
  });
  return <h1>Pay</h1>;
}

export async function getServerSideProps({ query }) {
  const sp_session_id = query.session_id;
  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${sp_session_id}`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
    }
  );
  const data = await res.json();

  const auth = (await login()) || {};
  const session_id = auth.sessionid ?? "";

  const purhcase = await getMedia({
    session_id,
    media_id: data.metadata.media_id,
    media_license: "standard",
    media_option: data.metadata.media_option,
    force_purchase_method: "ondemand",
  });

  return {
    props: {
      file_name: data.metadata.media_name,
      downloadLink: purhcase.downloadLink,
    },
  };
}

export default SuccessPayPage;
