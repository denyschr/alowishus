import { debounce } from "./utils.js";

export default function initSiteHeader() {
  const body = document.body;
  const container = document.querySelector("[data-site-header]");
  const toggleMenuButton = document.querySelector("[data-toggle-menu-button]");

  const toggleMenu = () => {
    body.classList.toggle("prevent-scroll");
    body.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    body.classList.toggle("menu-open");
  };

  toggleMenuButton.addEventListener("click", toggleMenu);

  window.addEventListener("scroll", () => {
    window.scrollY > 0
      ? container.classList.add("scroll")
      : container.classList.remove("scroll");
  });

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
}
