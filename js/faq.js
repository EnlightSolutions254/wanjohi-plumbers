export function initFaq() {
  document.querySelectorAll(".faq-q").forEach((button) => {
    const item = button.closest(".faq-item");
    const answer = item?.querySelector(".faq-a");
    if (!item || !answer) return;

    const isOpen = item.classList.contains("open");
    button.setAttribute("aria-expanded", String(isOpen));

    button.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item").forEach((faqItem) => {
        faqItem.classList.remove("open");
        faqItem.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
      });

      if (!wasOpen) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}
