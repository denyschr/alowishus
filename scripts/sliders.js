import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const initSliders = () => {
  const customersSliderLastElementIndex =
    document.querySelectorAll("[data-customers-slider] .swiper-slide").length -
    1;
  const customersSlider = new Swiper("[data-customers-slider]", {
    navigation: {
      nextEl: "[data-customers-slider-button-next]",
      prevEl: "[data-customers-slider-button-prev]",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 1.4,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesOffsetBefore: 0,
        spaceBetween: 20,
      },
      992: {
        initialSlide: customersSliderLastElementIndex,
        slidesPerView: 1.4,
        slidesOffsetBefore: 14,
        spaceBetween: 25,
      },
      1200: {
        initialSlide: customersSliderLastElementIndex,
        slidesPerView: 1.7,
        slidesOffsetBefore: 14,
        spaceBetween: 35,
      },
    },
  });
};

export default initSliders;
