export default function moveElement() {
  const sourceElements = document.querySelectorAll("[data-move]");
  sourceElements.forEach((sourceElement) => {
    const [destination, breakpoint, position] =
      sourceElement.dataset.move.split(";");
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint})`);
    const sourceParent = sourceElement.parentElement;
    const sourceNextSibling = sourceElement.nextElementSibling;

    const move = () => {
      if (mediaQuery.matches) {
        const targetElement = document.querySelector(destination);
        if (!position || position === "first") {
          targetElement.insertAdjacentElement("afterbegin", sourceElement);
        } else if (position === "last") {
          targetElement.insertAdjacentElement("beforeend", sourceElement);
        }
      } else {
        if (sourceNextSibling) {
          sourceParent.insertBefore(sourceElement, sourceNextSibling);
        } else {
          sourceParent.appendChild(sourceElement);
        }
      }
    };

    move();

    mediaQuery.addEventListener("change", move);
  });
}
