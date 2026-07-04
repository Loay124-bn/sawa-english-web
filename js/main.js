/* ==========================================================================
   Sawa English — main.js
   Vanilla JS: sticky navbar state, mobile menu, scroll reveal animations
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Sticky navbar background on scroll ---------- */
  var navbar = document.getElementById("navbar");

  function updateNavbarState() {
    if (!navbar) return;
    if (window.scrollY > 12) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  }

  updateNavbarState();
  window.addEventListener("scroll", updateNavbarState, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var navDrawer = document.getElementById("navDrawer");

  if (navToggle && navDrawer) {
    navToggle.addEventListener("click", function () {
      var isOpen = navDrawer.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close drawer when a link inside it is clicked
    navDrawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navDrawer.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll reveal animations ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: no IntersectionObserver support — just show everything
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ---------- Google Play link placeholder ----------
     Replace "#" below (or the href in HTML) with your real
     Google Play Store URL once the app is published. */
  var playStoreLinks = document.querySelectorAll("#playStoreBtn, #playStoreBtnCta");
  var PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.sawaenglish.app&hl=en"; // TODO: replace with real Play Store link

  playStoreLinks.forEach(function (link) {
    link.setAttribute("href", PLAY_STORE_URL);
  });
})();
