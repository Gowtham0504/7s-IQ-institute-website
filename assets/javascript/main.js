document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     WHY CHOOSE US ANIMATION
  ================================ */
  const chooseCards = document.querySelectorAll(".choose-card");
  const whySection = document.querySelector(".why-choose-us");

  if (chooseCards.length && whySection) {
    const chooseObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            chooseCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("show");
              }, index * 150);
            });
            observer.unobserve(whySection);
          }
        });
      },
      { threshold: 0.2 }
    );

    chooseObserver.observe(whySection);
  }

  /* ===============================
     STATS COUNTER ANIMATION
  ================================ */
  const counters = document.querySelectorAll(".counter");

  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let count = 0;
            const increment = target / 100;

            const updateCounter = () => {
              if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
              } else {
                counter.innerText = target;
              }
            };

            updateCounter();
            counterObserver.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => counterObserver.observe(counter));
  }

});
