/* assets/js/aero2.js — ENTIRE UPDATED FILE */
/* global jQuery */
(function () {
  "use strict";

  /* =========================================================
     RF NAV (tabs / mobile menu)
     ========================================================= */

  var NAV_ID = "rf-nav";
  var OPEN = "is-open";

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function ensureId(nav) {
    if (!nav.id) nav.id = NAV_ID;
    return nav.id;
  }

  function ensureToggleFor(nav) {
    var btn = nav.previousElementSibling;
    if (btn && btn.classList && btn.classList.contains("rf-nav-toggle")) return btn;

    var b = document.createElement("button");
    b.type = "button";
    b.className = "rf-nav-toggle";
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-controls", ensureId(nav));
    b.textContent = "Menu";

    nav.parentNode.insertBefore(b, nav);
    return b;
  }

  function isToggleVisible(btn) {
    if (!btn) return false;
    var cs = window.getComputedStyle(btn);
    return cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0";
  }

  function setOpen(nav, btn, open) {
    nav.classList.toggle(OPEN, !!open);
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function closeAll() {
    qsa(".rf-nav." + OPEN).forEach(function (nav) {
      var btn = nav.previousElementSibling;
      if (btn && btn.classList && btn.classList.contains("rf-nav-toggle")) {
        setOpen(nav, btn, false);
      } else {
        nav.classList.remove(OPEN);
      }
    });
  }

  function boot() {
    qsa(".rf-nav").forEach(function (nav) {
      var btn = ensureToggleFor(nav);

      // mobile = toggle visible => default CLOSED
      if (isToggleVisible(btn)) setOpen(nav, btn, false);
      else setOpen(nav, btn, true);
    });
  }

  // capture click so nothing can swallow it
  document.addEventListener(
    "click",
    function (e) {
      var t = e.target;

      // Menu button
      var btn = t && t.closest ? t.closest(".rf-nav-toggle") : null;
      if (btn) {
        var id = btn.getAttribute("aria-controls");
        var nav = id ? document.getElementById(id) : null;
        if (!nav) nav = btn.parentNode && qs(".rf-nav", btn.parentNode);
        if (!nav) return;

        if (!isToggleVisible(btn)) return;

        e.preventDefault();
        e.stopPropagation();

        setOpen(nav, btn, !nav.classList.contains(OPEN));
        return;
      }

      // Clicking a nav link closes nav immediately (retro behavior)
      var tab = t && t.closest ? t.closest(".rf-nav a.rf-tab") : null;
      if (tab) {
        closeAll();
        return;
      }

      // outside click closes if open (mobile only)
      var openNav = qs(".rf-nav." + OPEN);
      if (!openNav) return;

      var openBtn = openNav.previousElementSibling;
      if (!openBtn || !openBtn.classList.contains("rf-nav-toggle")) return;
      if (!isToggleVisible(openBtn)) return;

      if (openNav.contains(t) || openBtn.contains(t)) return;
      closeAll();
    },
    true
  );

  // Escape closes
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    closeAll();
  });

  window.addEventListener("pageshow", boot, { passive: true });
  window.addEventListener("resize", boot, { passive: true });
  window.addEventListener("orientationchange", boot, { passive: true });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { passive: true });
  } else {
    boot();
  }

  /* =========================================================
     RF LATEST POSTS — PAGINATION HEIGHT LOCK
     (prevents page resize when paginating)
     ========================================================= */

  function lockLatestRailHeight() {
    var rail = document.querySelector(".rf-rail--latest");
    if (!rail) return;

    var items = Array.prototype.slice.call(
      rail.querySelectorAll(".rf-rail-item")
    );
    if (!items.length) return;

    var list =
      rail.querySelector(".rf-rail-list") || items[0].parentElement;
    if (!list) return;

    list.classList.add("rf-rail-list");

    var perPage = Math.max(
      1,
      parseInt(list.dataset.perPage || "6", 10)
    );
    var pageCount = Math.max(1, Math.ceil(items.length / perPage));

    var wasHidden = items.map(function (el) {
      return el.hidden;
    });

    function showPage(i) {
      var start = i * perPage;
      var end = start + perPage;
      items.forEach(function (el, idx) {
        el.hidden = !(idx >= start && idx < end);
      });
    }

    var maxH = 0;
    for (var p = 0; p < pageCount; p++) {
      showPage(p);
      var h = list.getBoundingClientRect().height;
      if (h > maxH) maxH = h;
    }

    items.forEach(function (el, i) {
      el.hidden = wasHidden[i];
    });

    list.style.setProperty("--rf-rail-minh", Math.ceil(maxH) + "px");
  }

  function relock() {
    var list = document.querySelector(".rf-rail--latest .rf-rail-list");
    if (list) list.style.removeProperty("--rf-rail-minh");
    lockLatestRailHeight();
  }

  window.addEventListener("load", lockLatestRailHeight);
  window.addEventListener("resize", relock);

  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    if (t.closest(".rf-rail--latest .rf-pager-btn")) {
      lockLatestRailHeight();
    }
  });
})();
