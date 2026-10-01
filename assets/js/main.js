/* 스크롤 리빌 · 헤더 상태 · 모바일 메뉴 · 현재 섹션 표시 (무의존성) */
(function () {
  "use strict";
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // 모바일 메뉴
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    };
    btn.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  // 현재 섹션 하이라이트
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var groups = { why: "why", shift: "why", temi: "temi", reference: "reference", adopt: "reference", usage: "reference", result: "reference",
    curriculum: "curriculum", outcomes: "outcomes", deploy: "deploy", contact: "contact" };
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var key = groups[e.target.id];
        links.forEach(function (a) { a.classList.remove("active"); });
        if (key && map[key]) map[key].classList.add("active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(groups).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) so.observe(el);
    });
  }
})();
