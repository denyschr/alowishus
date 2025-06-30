import { throttle } from "./utils.js";

const initGoToTop = () => {
  const root = document.documentElement;
  const button = document.querySelector("[data-go-to-top-button]");
  const target = document.querySelector(button.getAttribute("href"));

  const scrollToTop = (event) => {
    event.preventDefault();
    target.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const updateButtonVisibility = throttle(() => {
    window.scrollY > root.clientHeight
      ? button.classList.add("show")
      : button.classList.remove("show");
  });

  updateButtonVisibility();
  button.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", updateButtonVisibility);
};

export default initGoToTop;
