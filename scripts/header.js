import { throttle } from "./utils.js";

const initHeader = () => {
  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const toggleMenuButton = document.querySelector("[data-toggle-menu-button]");
  const mediaQuery = window.matchMedia("(max-width: 61.99875em)");

  const toggleMenu = () => {
    root.classList.toggle("prevent-scroll");
    root.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    root.classList.toggle("menu-open");
  };

  const updateMenu = (mq) => {
    if (!mq.matches) {
      root.classList.remove("prevent-scroll");
      root.classList.remove("menu-open");
      toggleMenuButton.setAttribute("aria-expanded", "false");
    }
  };

  const updateHeaderStyle = throttle(() => {
    window.scrollY > 0
      ? header.classList.add("scroll")
      : header.classList.remove("scroll");
  });

  updateMenu(mediaQuery);
  updateHeaderStyle();
  toggleMenuButton.addEventListener("click", toggleMenu);
  mediaQuery.addEventListener("change", updateMenu);
  window.addEventListener("scroll", updateHeaderStyle);
};

export default initHeader;
