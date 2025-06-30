import { debounce, throttle } from "./utils.js";

const initHeader = () => {
  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const toggleMenuButton = document.querySelector("[data-toggle-menu-button]");

  const toggleMenu = () => {
    root.classList.toggle("prevent-scroll");
    root.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    root.classList.toggle("menu-open");
  };

  const closeMenu = debounce(() => {
    if (window.innerWidth >= 992) {
      root.classList.remove("prevent-scroll");
      root.classList.remove("menu-open");
      toggleMenuButton.setAttribute("aria-expanded", "false");
    }
  });

  const updateHeaderStyle = throttle(() => {
    window.scrollY > 0
      ? header.classList.add("scroll")
      : header.classList.remove("scroll");
  });

  updateHeaderStyle();
  toggleMenuButton.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", updateHeaderStyle);
  window.addEventListener("resize", closeMenu);
};

export default initHeader;
