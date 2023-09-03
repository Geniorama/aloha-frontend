import Layout from '@/components/Layout/Layout';
import HeroCategory from "@/components/Hero/HeroCategory/HeroCategory";
import bgFotos from "../../../public/img/category/bg_fotos.jpg";
import TitleSection from "@/components/TitleSection/TitleSection";
import HomeStyles from "@/styles/Home.module.css";
import CardCategory from "@/components/CardCategory/CardCategory";
import styles from "@/styles/Category.module.css";
import img_trabajo from "../../../public/img/category/cat-trabajo.png";
import img_flores from "../../../public/img/category/cat-flores.png";
import img_abstracto from "../../../public/img/category/cat-abstracto.png";
import img_paisaje from "../../../public/img/category/cat-paisaje.png";
import img_comida from "../../../public/img/category/cat-comida.png";
import img_arquitectura from "../../../public/img/category/cat-arquitectura.png";
import img_relajado from "../../../public/img/category/cat-relajado.png";
import img_amigos from "../../../public/img/category/cat-amigos.png";
import img_backgrounds from "../../../public/img/category/cat-background.png";
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import CardGrid from '@/components/CardGrid/CardGrid';

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

          <div className={`mt-4 row ${styles.Grid} ${styles.Grid__style1}`}>
            {/* Column */}
            <div className={`col-12 col-md-4 ${styles.Column}`}>
              <div className={styles.Item} style={{height: '40%'}}>
                <CardCategory
                  text={'Trabajo'}
                  height={'100%'}
                  image={img_trabajo}
                />
              </div>

              <div className={`${styles.Item}`} style={{height: '30%'}}>
                <CardCategory
                  text={'Relajado'}
                  height={'100%'}
                  image={img_relajado}
                />
              </div>

              <div className={styles.Item} style={{height: '30%'}}>
                <CardCategory
                  text={'Paisaje'}
                  height={'100%'}
                  image={img_paisaje}
                />
              </div>
            </div>

            {/* Column */}
            <div className={`col-12 col-md-4 ${styles.Column}`}>
              <div className={styles.Item} style={{height: '20%'}}>
                <CardCategory
                  text={'Flores'}
                  height={'100%'}
                  image={img_flores}
                />
              </div>

              <div className={styles.Item} style={{height: '55%'}}>
                <CardCategory
                  text={'Amigos'}
                  height={'100%'}
                  image={img_amigos}
                />
              </div>

              <div className={styles.Item} style={{height: '25%'}}>
                <CardCategory
                  text={'Abstracto'}
                  height={'100%'}
                  image={img_abstracto}
                />
              </div>
            </div>

            {/* Column */}
            <div className={`col-12 col-md-4 ${styles.Column}`}>
              <div className={styles.Item} style={{height: '35%'}}>
                <CardCategory
                  text={'Arquitectura'}
                  height={'100%'}
                  image={img_arquitectura}
                />
              </div>

              <div className={styles.Item} style={{height: '35%'}}>
                <CardCategory
                  text={'Backgrounds'}
                  height={'100%'}
                  image={img_backgrounds}
                />
              </div>

              <div className={styles.Item} style={{height: '30%'}}>
                <CardCategory
                  text={'Comida'}
                  height={'100%'}
                  image={img_comida}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${HomeStyles.Section}`}>
        <div className="container">
          <TitleSection text={'Colección de fotos.'} />
          <div className='text-center'>
            <ButtonLink 
              text={'Ver todos'}
              color={'coral'}
              size={'m'}
            />
          </div>

          <div>
            <CardGrid />
          </div>
        </div>
      </section>
    </Layout>
  )
}
