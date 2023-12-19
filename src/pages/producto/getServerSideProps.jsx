import getMediaData from "@/services/product.service";
import { getMedia } from "@/services/purchase.service";
import { login } from "@/services/user.service";

export async function getServerSideProps({ params, query }) {
  try {
    let file = false;
    const productId = params.productId || "";
    const data =
      (await getMediaData(productId, {
        full_similar: true,
        search_layout: 1,
      })) || {};

    const auth = (await login()) || {};
    const session_id = auth.sessionid ?? "";

    const sp_session_id = query.session_id;
    console.log(params);
    if (sp_session_id) {
      const res = await fetch(
        `https://api.stripe.com/v1/checkout/sessions/${sp_session_id}`,
        {
          method: "GET",
          headers: {
            Authorization: `bearer ${process.env.STRIPE_SECRET_KEY}`,
          },
        }
      );
      const transaction = await res.json();

      const purchase = await getMedia({
        session_id,
        media_id: transaction.metadata.media_id,
        media_license: "standard",
        media_option: transaction.metadata.media_option,
        force_purchase_method: "ondemand",
      });

      file.media_name = data.metadata.media_name;
      file.downloadLink = purchase.downloadLink;
    }

    return {
      props: {
        data,
        session_id,
        file,
      },
    };
  } catch (error) {
    return { props: {} };
  }
}
