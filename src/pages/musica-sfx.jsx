import CardGrid from "@/components/CardGrid/CardGrid";
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import Layout from "@/components/Layout/Layout";
import Slider from "@/components/Slider/Slider";
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
      <div>
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
    </Layout>
  );
}

export default MusicSFXPage;
