import Layout from '@/components/Layout/Layout';
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import bgFotos from "../../../public/img/category/bg_fotos.jpg";
import TitleSection from "@/components/TitleSection/TitleSection";
import HomeStyles from "@/styles/Home.module.css";
import CardCategory from "@/components/CardCategory/CardCategory";
import styles from "@/styles/Category.module.css";

export default function Fotos() {
  const metaData = {
    title: 'Categoría | Fotos',
  }

  console.log(bgFotos.src)

  return (
    <Layout metaData={metaData}>
      <div className="container-fluid">
        <HeroCategory
          background={bgFotos.src}
          search={true}
          title={'Fotos'}
          desc={'La magia en cada imagen'}
          layer={{
            background: 'linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.3) 49%, rgba(0,0,0,0) 100%)',
            backgroundBlendMode: 'multiply',
          }}
        />
      </div>

      <section className={HomeStyles.Section}>
        <div className="container">
          <TitleSection
            text={"Categorías de fotos."}
          />

          <div className={`mt-4 ${styles.Grid} ${styles.Grid__style1}`}>
            <div className={styles.Item}>
              <CardCategory
                text={'Trabajo'}
              />
            </div>

            <div className={styles.Item}>
              <CardCategory
                text={'Flores'}
              />
            </div>

            <div className={styles.Item}>
              <CardCategory
                text={'Arquitectura'}
              />
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}
