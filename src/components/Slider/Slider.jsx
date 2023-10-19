import ReactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrowButton from "./NextArrowButton";
import PrevArrowButton from "./PrevArrowButton";
import { defaultSettingSlider } from "@/helpers/helpers";

const settings = {
  ...defaultSettingSlider,
  nextArrow: <NextArrowButton />,
  prevArrow: <PrevArrowButton />,
};

export default function Slider({ children, ...props }) {
  const options = { ...settings, ...props };
  return <ReactSlick {...options}>{children}</ReactSlick>;
}
