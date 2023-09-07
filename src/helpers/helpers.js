export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const defaultSettingSlider = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
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
        slidesToShow: 5,
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
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        arrows: false,
      },
    },
  ],
};
