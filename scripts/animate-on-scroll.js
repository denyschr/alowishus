const animateOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.add("animate");
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll("[data-animate]")
    .forEach((element) => observer.observe(element));
};

export default animateOnScroll;
