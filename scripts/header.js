import { debounce } from "./utils.js";

const initHeader = () => {
  const root = document.documentElement;
  const container = document.querySelector("[data-header]");
  const toggleMenuButton = document.querySelector("[data-toggle-menu-button]");

  const onToggle = () => {
    root.classList.toggle("prevent-scroll");
    root.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    root.classList.toggle("menu-open");
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
        root.classList.remove("prevent-scroll");
        root.classList.remove("menu-open");
        toggleMenuButton.setAttribute("aria-expanded", "false");
      }
    })
  );
};

export default initHeader;
