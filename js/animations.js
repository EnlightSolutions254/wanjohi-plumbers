export function initRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("show"));
    return;
  }

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((element) => reveal.observe(element));
}

export function initCounters() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-count]").forEach((target) => {
      const end = Number(target.dataset.count);
      if (!end) return;
      target.innerHTML = target.parentElement?.classList.contains("metric") ? `${end}<span>yrs</span>` : String(end);
    });
    return;
  }

  const counter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const target = entry.target;
      const end = Number(target.dataset.count);
      if (!end || target.dataset.done) return;

      target.dataset.done = "1";
      const start = performance.now();
      const duration = 900;

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * end);
        target.innerHTML = target.parentElement?.classList.contains("metric") ? `${value}<span>yrs</span>` : String(value);

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counter.unobserve(target);
    });
  }, { threshold: 0.7 });

  document.querySelectorAll("[data-count]").forEach((element) => counter.observe(element));
}
