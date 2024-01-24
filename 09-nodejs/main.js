import Swiper from "swiper";
import "swiper/swiper.css";

const swiper = new Swiper(".slide-name", {
  direction: "vertical",
  loop: true,
  pagination: { el: ".swiper-pagination" },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
