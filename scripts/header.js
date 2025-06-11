import { debounce } from "./utils.js";

const initHeader = () => {
  const body = document.body;
  const container = document.querySelector("[data-header]");
  const toggleMenuButton = document.querySelector("[data-toggle-menu-button]");

  const onToggle = () => {
    body.classList.toggle("prevent-scroll");
    body.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    body.classList.toggle("menu-open");
  };

  const onScroll = () => {
    window.scrollY > 0
      ? container.classList.add("scroll")
      : container.classList.remove("scroll");
  };

  onScroll();

  toggleMenuButton.addEventListener("click", onToggle);

  window.addEventListener("scroll", onScroll);

  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth >= 992) {
        body.classList.remove("prevent-scroll");
        body.classList.remove("menu-open");
        toggleMenuButton.setAttribute("aria-expanded", "false");
      }
    })
  );
};

export default initHeader;
