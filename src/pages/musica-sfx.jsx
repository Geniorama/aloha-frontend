import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import PlayerListTrends from "@/components/PlayerListTrends/PlayerListTrends";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import PopularSearches from "@/components/PopularSearches/PopularSearches";
// import Slider from "@/components/Slider/Slider";
import TitleSection from "@/components/TitleSection/TitleSection";
import { getPlayList } from "@/services/musicfx.service";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrowButton from "@/components/Slider/NextArrowButton";
import PrevArrowButton from "@/components/Slider/PrevArrowButton";

const settings = {
  dots: false,
  infinite: true,
  lazyLoad: "ondemand",
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 3000,
  variableWidth: true,
  adaptiveHeight: true,
  // responsive: [
  //   {
  //     breakpoint: 1024, // Pantallas grandes
  //     settings: {
  //       slidesToShow: 4,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 769, // Tablets
  //     settings: {
  //       slidesToShow: 4,
  //       centerMode: false,
  //     },
  //   },
  //   {
  //     breakpoint: 480, // Dispositivos móviles
  //     settings: {
  //       centerMode: true,
  //       variableWidth: true,
  //       arrows: false,
  //     },
  //   },
  // ],
  nextArrow: <NextArrowButton />,
  prevArrow: <PrevArrowButton />,
};


const metaData = {
  title: "Música y SFX",
};
function MusicSFXPage({ playlist }) {
  return (
    <Layout metaData={metaData}>
      <HeroCategory
        background="/img/music-sfx/background-hero.png"
        search={true}
        title="Música y SFX"
        desc="Efectos de sonido sin royalities"
        layer={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="section py-5">
        <div className="container py-3">
          <TitleSection text={`Colección de música.`} />
          <div className="text-center mb-4">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
        </div>
        <Slider {...settings}>
          <CardGrid name="Alternativa" items={["/img/music-sfx/alternative.png"]} />
          <CardGrid name="Ambiente" items={["/img/music-sfx/ambiente.png"]} />
          <CardGrid name="Cine" items={["/img/music-sfx/cine.png"]} />
          <CardGrid name="Alternativa" items={["/img/music-sfx/alternative.png"]} />
          <CardGrid items={["/img/music-sfx/alternative.png"]} />
        </Slider>
      </div>
      <PopularAuthors type="dark" />
      <div className="section py-5">
        <div className="container py-1">
          <TitleSection
            otherClass="text-wrap-balance"
            text={`Descubres las tendencias actuales.`}
          />
          <PlayerListTrends playlist={playlist} />
        </div>
      </div>
      <PlanSection idTab={3} />
      <PopularSearches />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const playlist =
      (await getPlayList(null, { search_limit: 15, search_instrument: 2 })) ||
      [];
    return { props: { playlist } };
  } catch (error) {
    return { props: { error } };
  }
}

export default MusicSFXPage;
