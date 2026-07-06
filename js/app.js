import { initNavigation } from "./navigation.js";
import { initFaq } from "./faq.js";
import { initRevealAnimations, initCounters } from "./animations.js";

function initCopyrightYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

initNavigation();
initFaq();
initRevealAnimations();
initCounters();
initCopyrightYear();
