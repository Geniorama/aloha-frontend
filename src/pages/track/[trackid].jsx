import Layout from "@/components/Layout/Layout";
import TrackDetail from "@/components/TrackDetail/TrackDetail";
import Waveform from "@/components/Waveform/Waveform";
import secondsToString from "@/lib/secondsToString";
import getMediaData from "@/services/product.service";
import Image from "next/image";
import Link from "next/link";

const metaData = {
  title: "Track",
};

export default function TrackPage({ data: track = {} }) {
  return (
    <Layout metaData={metaData}>
      <section className="container px-5">
        <h2>{track?.title} </h2>
        <TrackDetail {...track} />
      </section>
      <section className="container px-5">
        <div>
          <div>
            <h4>Descripción</h4>
            <p>{track.description}</p>
            <span className="d-block">- Pista de música {track.id}</span>
          </div>
          <div>
            <h4>Palabras clave</h4>
            <div>{track.tags}</div>
          </div>
        </div>
        <div>
          <h4>Detalles</h4>
          <ul>
            <li>BPM: {track.bpm}</li>
            <li>Duracion: {secondsToString(track.duration_in_seconds)}</li>
            <li>ID del archivo: {track.id}</li>
            <li>Fecha de carga: {track.published}</li>
          </ul>
        </div>
        <div>
          <h4>Colaborador</h4>
          <div>
            <Image src={track.avatar} width={50} height={50} alt="" />
            <span>{track.username}</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const track = params.trackid || "";
    const data = (await getMediaData(track)) || {};
    return { props: { data } };
  } catch (error) {
    return { props: {} };
  }
}
