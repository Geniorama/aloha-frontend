import ButtonLink from "@/components/ButtonLink/ButtonLink";
import CardGrid from "@/components/CardGrid/CardGrid";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import PlanSection from "@/components/PlanSection/PlanSection";
import PlayerListTrends from "@/components/PlayerListTrends/PlayerListTrends";
import PopularAuthors from "@/components/PopularAuthors/PopularAuthors";
import PopularSearches from "@/components/PupularSearches/PopularSearches";
import Slider from "@/components/Slider/Slider";
import TitleSection from "@/components/TitleSection/TitleSection";
const metaData = {
  title: "Música y SFX",
};
function MusicSFXPage() {
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
          <TitleSection text={`Categorías de música.`} />
          <div className="text-center mb-4">
            <ButtonLink text={"Ver todos"} color={"coral"} size={"m"} />
          </div>
          <Slider>
            <CardGrid
              name="Alternativa"
              items={["/img/music-sfx/alternative.png"]}
            />
            <CardGrid name="Ambiente" items={["/img/music-sfx/ambiente.png"]} />
            <CardGrid name="Cine" items={["/img/music-sfx/cine.png"]} />
            <CardGrid items={["/img/music-sfx/alternative.png"]} />
          </Slider>
        </div>
      </div>
      <PopularAuthors type="dark" />
      <div className="section py-5">
        <div className="container py-1">
          <TitleSection
            otherClass="text-wrap-balance"
            text={`Descubres las tendencias actuales.`}
          />
          <PlayerListTrends />
        </div>
      </div>
      <PlanSection />
      <PopularSearches />
    </Layout>
  );
}

export default MusicSFXPage;
