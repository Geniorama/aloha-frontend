import axios from "axios";
import planes from "@/data/planes.json";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const defaultSettingSlider = {
  dots: false,
  infinite: true,
  lazyLoad: "ondemand",
  arrows: true,
  speed: 500,
  // slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 3000,
  speed: 2000,
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024, // Pantallas grandes
      settings: {
        dots: true,
      },
    },
    {
      breakpoint: 769, // Tablets
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },
    {
      breakpoint: 480, // Dispositivos móviles
      settings: {
        centerMode: true,
        variableWidth: true,
        arrows: false,
      },
    },
  ],
};

export const api = process.env.NEXT_PUBLIC_API_URL;

export const request = async (command, options = {}) => {
  try {
    const params = {};
    for (const key in options) {
      if (options.hasOwnProperty(key)) {
        const param = `dp_${key}`;
        params[param] = options[key];
      }
    }
    const response = await axios.post(`${api}`, null, {
      params: {
        dp_apikey: process.env.NEXT_PUBLIC_API_KEY,
        dp_command: command,
        dp_translate_items: true,
        dp_lang: "sp",
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlan = (category) =>
  planes.filter((plan) =>
    plan.category.some((categoria) => categoria.name === category)
  );

export const capitalizeFirstLetter = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};
