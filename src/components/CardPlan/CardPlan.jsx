import styles from "./CardPlan.module.css";
import Tabs from "../Tabs/Tabs";
import Link from "next/link";
import ButtonLink from "../ButtonLink/ButtonLink";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { auth } from "@/lib/auth";
import { useState } from "react";
import stripe from "@/lib/stripe";

export default function CardPlan({ planes }) {
  const [selectedPlan, setSelectedPlan] = useState();
  const onSelectPlan = (plan) => setSelectedPlan(plan);
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
  const onSubmit = async () => {
    const session = auth();
    return stripe({
      amount: selectedPlan.price,
      offer_id: selectedPlan.id,
      subaccount_id: session.user_id,
      subscription: true,
    });
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
                  idPlan={plan.id}
                  items={plan.type}
                  onSelectPlan={onSelectPlan}
                  style={"style-2"}
                />
              </div>
            </div>
            <div className={styles.CardFooter}>
              <button
                type="submit"
                onClick={onSubmit}
                className={styles.ButtonBuy}
              >
                Comprar ahora
              </button>
            </div>
          </div>
        ))}
    </Slider>
  );
}
