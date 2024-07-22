let subsAnimateStarted = false;
const subsEl = document.querySelector(".audience-subs");

const spaceSeparator = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = spaceSeparator(
      Math.floor(progress * (end - start) + start)
    );
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const elementIsVisibleInViewport = (el) => {
  if (subsAnimateStarted) return;

  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  const isVisible =
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;

  if (isVisible) {
    subsAnimateStarted = true;
    animateValue(el, 4300212, 5200564, 4000);
  }
};

$(document).ready(() => {
  window.addEventListener("scroll", () => {
    elementIsVisibleInViewport(subsEl);
  });

  elementIsVisibleInViewport(subsEl);
});
