import styles from "./CardPlan.module.css";
import Tabs from "../Tabs/Tabs";
import Link from "next/link";
import ButtonLink from "../ButtonLink/ButtonLink";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function CardPlan({ planes }) {
  if (!planes || planes.length < 1) {
    return;
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 769, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Dispositivos móviles
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10%",
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {planes &&
        planes.map((plan, i) => (
          <div key={i} className={styles.Card}>
            <div className={styles.CardContent}>
              <h5 className={styles.CardTitle}>{plan.name}</h5>
              <div>
                <Tabs
                  products={true}
                  // namePlan={plan.category[0].slug}
                  idPlan={plan.id}
                  items={plan.type}
                  style={"style-2"}
                />
              </div>
            </div>
            <div className={styles.CardFooter}>
              <button className={styles.ButtonBuy}>
                <ButtonLink text={"Comprar ahora"} color={"white"} />
              </button>
            </div>
          </div>
        ))}
    </Slider>
  );
}
