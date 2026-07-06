export function initNavigation() {
  const header = document.getElementById("siteHeader");
  const navLinks = document.getElementById("navLinks");
  const menu = document.getElementById("menuToggle");

  if (!header || !navLinks || !menu) return;

  const setHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };

  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  menu.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-label", "Open navigation");
    });
  });
}
