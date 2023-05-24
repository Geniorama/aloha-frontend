import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSearch from "@/components/Hero/HeroSearch";
import TitleSection from "@/components/TitleSection/TitleSection";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import GalleryExample from "../../public/img/home/image 110.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideExample1 from '../../public/img/home/image 113.jpg';
import SlideExample2 from '../../public/img/home/image 114.jpg';
import CardCategory from "@/components/CardCategory/CardCategory";
import LogoBrands1 from "../../public/img/home/brands/image 21.png";
import LogoBrands2 from "../../public/img/home/brands/image 22.png";
import LogoBrands3 from "../../public/img/home/brands/image 23.png";
import LogoBrands4 from "../../public/img/home/brands/image 24.png";
import LogoBrands5 from "../../public/img/home/brands/image 25.png";
import PricingCard from "@/components/PricingCard/PricingCard";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    speed: 2000
  };


  return (
    <div>
      <Header />
      <div className="container-fluid">
        <HeroSearch />
      </div>

      <section className={`${styles.SectionPopular} ${styles.Section}`}>
        <div className="container">
          <TitleSection text="Fotos populares." color={'black'} />
          <div className="text-center my-3">
            <ButtonLink href={'/'} text={'Ver todas las fotos'} color={'coral'} />
          </div>

          <div className={styles.GridPopular}>
            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.GridPopular__item}>
              <Image
                src={GalleryExample}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fotos de temporada */}
      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text="Fotos de temporada." color={'black'} />
        </div>

        {/* Slider */}
        <div>
          <Slider {...settings}>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample1}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
          </Slider>
        </div>

        {/* Promo */}
        <div className="container-fluid">
          <div className="p-3 mb-3 text-center d-flex justify-content-center align-items-center" style={{ background: "var(--aloha-blue)" }}>
            <p className="m-0" style={{ fontWeight: '600', fontSize: '32px', color: 'white' }}>Obtén 100 imágenes por $100/mes <ButtonLink href={'/'} size={'xl'} text={'Comprar ahora'} color={'coral'} /></p>
          </div>
        </div>
      </section>

      <section className={`${styles.Section}`}>
        <div className="container">
          <TitleSection text="Categorías." color={'black'} />
          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <CardCategory text={'Fotos'} />
            </div>
            <div className="col-12 col-md-4">
              <CardCategory link_position={'bottom-right'} text={'Vectores'} />
            </div>
            <div className="col-12 col-md-4">
              <CardCategory text={'Ilustraciones'} />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-3">
              <CardCategory text={'Videos'} size={'large'} />
            </div>

            <div className="col-12 col-md-3">
              <CardCategory text={'Música'} size={'large'} link_position={'bottom-right'} />
            </div>

            <div className="col-12 col-md-3">
              <CardCategory text={'Gratis'} size={'large'} />
            </div>

            <div className="col-12 col-md-3">
              <CardCategory text={'Efectos de sonido'} size={'large'} link_position={'bottom-right'} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.Section} style={{ background: 'var(--aloha-coral)' }}>
        <div className="container">
          <div style={{ maxWidth: '90%' }}>
            <TitleSection text="Empresas que trabajan con nosotros." color={'blue'} />
          </div>

          <div className={`${styles.RowBrands} d-flex align-items-center flex-row`}>
            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands1} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands2} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands3} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands4} />
            </div>

            <div className={styles.RowBrands__item}>
              <Image src={LogoBrands5} />
            </div>
          </div>

          <div className="row align-items-center" style={{marginTop: '6rem'}}>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-end">
                <h3 style={{ fontSize: '107px', fontWeight: 'bold', color: 'var(--aloha-blue)', marginTop: '-5rem' }}>hola!</h3>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="d-flex align-items-start">
                <span>
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_124_3263)">
                      <path d="M85 85L35 35" stroke="white" stroke-width="10" />
                      <path d="M40 85H85V40" stroke="white" stroke-width="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_3263">
                        <rect width="120" height="120" fill="white" transform="matrix(1 0 0 -1 0 120)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className={styles.ctaText}>
                  <br /><br />
                  <p>¿Quieres un paquete personalizado para tu empresa?</p>
                  <ButtonLink text={'Solicita un presupuesto'} href={'/'} color={'blue'} size={'l'} />
                  <br /><br /><br /><br /><br /><br />
                </div>
                <span style={{alignSelf: 'flex-end'}}>
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_124_3267)">
                      <path d="M35 35L85 85" stroke="white" stroke-width="10" />
                      <path d="M80 35H35V80" stroke="white" stroke-width="10" />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_3267">
                        <rect width="120" height="120" fill="white" transform="matrix(-1 0 0 1 120 0)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.Section}>
        <div className="container">
          <TitleSection text="Fotos gratis." color={'black'} />
          <div style={{marginLeft: '35%'}}>
            <ButtonLink href={'/'} text={'Ver todas'} color={'coral'} size={'m'} />
          </div>
        </div>
        {/* Slider */}
        <div>
          <Slider {...settings}>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample1}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
            <div className={styles.SlideItem}>
              <Image
                src={SlideExample2}
                responsive
              />
            </div>
          </Slider>
        </div>
      </section>

      <section className={styles.Section} style={{background: 'var(--aloha-blue)'}}>
        <div className="container">
          <TitleSection text="Planes." color={'white'} />
          <div style={{marginLeft: '15%'}}>
            <ButtonLink href={'/'} text={'Conoce todos los planes'} color={'coral'} size={'m'} />
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <PricingCard
                title={'Imágenes.'}
                desc={'Más de 263 millones de fotos y vectores de stock de alta calidad para cubrir sus necesidades creativas.'}
                price={'$0,19'}
                label_price={'imagen'}
                href={'/'}
              />
            </div>
            <div className="col-12 col-md-4">
              <PricingCard
                title={'Imágenes.'}
                desc={'Más de 263 millones de fotos y vectores de stock de alta calidad para cubrir sus necesidades creativas.'}
                price={'$0,19'}
                label_price={'imagen'}
                href={'/'}
              />
            </div>
            <div className="col-12 col-md-4">
              <PricingCard
                title={'Imágenes.'}
                desc={'Más de 263 millones de fotos y vectores de stock de alta calidad para cubrir sus necesidades creativas.'}
                price={'$0,19'}
                label_price={'imagen'}
                href={'/'}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
