/* Shared helpers: icons, theme, nav, video modal */
(function () {
  const P = (d, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const F = (d) => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;

  const ICONS = {
    linkedin: F('<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>'),
    github: F('<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/>'),
    researchgate: F('<path d="M19.59 0H4.41A4.41 4.41 0 0 0 0 4.41v15.18A4.41 4.41 0 0 0 4.41 24h15.18A4.41 4.41 0 0 0 24 19.59V4.41A4.41 4.41 0 0 0 19.59 0zM15.6 5.04c1.34 0 2.11.86 2.11.86l-.6.84s-.56-.58-1.46-.58c-1.1 0-1.69.86-1.69 2.26v.64c0 1.4.6 2.26 1.73 2.26.82 0 1.27-.38 1.27-.38V9.66h-1.37v-.95h2.46v2.73s-.86.94-2.44.94c-1.82 0-2.86-1.14-2.86-3.2v-.9c0-2.05 1.12-3.24 2.85-3.24zM8.5 6.1c2.06 0 3.16.86 3.16 2.48 0 1.07-.55 1.85-1.48 2.24l2.62 4.68c.24.42.58.66 1.06.66v.92c-1.24.06-2-.35-2.6-1.42l-2.29-4.4c-.2.01-.43.01-.64.01H7.6v3.52c0 .97.3 1.29 1.28 1.29v1h-4.4v-1c.93 0 1.2-.3 1.2-1.29V8.37c0-.97-.27-1.26-1.2-1.26v-1H8.5zm-.28 1.03c-.24 0-.42.01-.62.04v3.53h.62c1.36 0 2.07-.62 2.07-1.85 0-1.13-.68-1.72-2.07-1.72z"/>'),
    scholar: F('<path d="M5.24 13.77 0 9.5 12 0l12 9.5-5.24 4.27C17.55 11.25 14.98 9.5 12 9.5s-5.55 1.75-6.76 4.27zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>'),
    orcid: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="currentColor"/><text x="12" y="16.2" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="11" fill="var(--surface, #fff)">iD</text></svg>',
    vimeo: F('<path d="M23.98 6.42c-.11 2.33-1.73 5.52-4.88 9.57-3.25 4.23-6 6.34-8.26 6.34-1.4 0-2.58-1.29-3.55-3.88L5.36 11.4C4.64 8.81 3.87 7.52 3.04 7.52c-.18 0-.81.38-1.89 1.13L0 7.19c1.19-1.04 2.36-2.09 3.51-3.13C5.1 2.69 6.28 1.97 7.07 1.9c1.87-.18 3.03 1.1 3.46 3.85.47 2.96.79 4.8.97 5.52.54 2.46 1.13 3.68 1.78 3.68.5 0 1.26-.79 2.27-2.38 1-1.59 1.54-2.8 1.62-3.63.14-1.37-.4-2.06-1.62-2.06-.58 0-1.17.13-1.78.4 1.18-3.88 3.44-5.76 6.78-5.65 2.47.07 3.64 1.67 3.5 4.79z"/>'),
    instagram: P('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>'),
    x: F('<path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z"/>'),
    mail: P('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    pin: P('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    briefcase: P('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>'),
    arrowRight: P('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    arrowLeft: P('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
    external: P('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
    download: P('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
    play: F('<path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/>'),
    check: P('<path d="M20 6 9 17l-5-5"/>'),
    award: P('<circle cx="12" cy="9" r="6"/><path d="M8.5 13.9 7 22l5-3 5 3-1.5-8.1"/>'),
    close: P('<path d="M6 6l12 12M18 6 6 18"/>'),
    menu: P('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    sun: P('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: P('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
    chevronLeft: P('<path d="m15 18-6-6 6-6"/>'),
    chevronRight: P('<path d="m9 18 6-6-6-6"/>'),
    file: P('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>')
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDur = (s) => {
    if (!s) return "";
    const m = Math.floor(s / 60), sec = String(s % 60).padStart(2, "0");
    return m >= 60 ? `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
  };
  const isExternal = (url) => /^https?:/.test(url);
  const isPdf = (url) => /\.pdf$/i.test(url);

  /* ---- Theme ---- */
  function getTheme() {
    try { const t = localStorage.getItem("theme"); if (t === "light" || t === "dark") return t; } catch (e) {}
    return null;
  }
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  function effectiveTheme() {
    return getTheme() || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  applyTheme(getTheme());

  function initChrome() {
    const btn = document.getElementById("themeToggle");
    const paint = () => { if (btn) btn.innerHTML = effectiveTheme() === "dark" ? ICONS.sun : ICONS.moon; };
    if (btn) {
      paint();
      btn.addEventListener("click", () => {
        const next = effectiveTheme() === "dark" ? "light" : "dark";
        try { localStorage.setItem("theme", next); } catch (e) {}
        applyTheme(next); paint();
      });
    }
    const menuBtn = document.getElementById("menuToggle");
    const links = document.getElementById("navLinks");
    if (menuBtn && links) {
      menuBtn.innerHTML = ICONS.menu;
      menuBtn.addEventListener("click", () => {
        const open = links.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open);
      });
      links.addEventListener("click", (e) => { if (e.target.closest("a")) links.classList.remove("open"); });
    }
    const nav = document.querySelector(".nav");
    const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

    // Profile photo: use profile.jpg when present, otherwise keep the fallback.
    const prof = (window.SITE || {}).profile || {};
    if (prof.photo) {
      const probe = new Image();
      probe.onload = () => {
        document.querySelectorAll(".brand img").forEach((im) => (im.src = prof.photo));
        const icon = document.querySelector('link[rel="icon"]'); if (icon) icon.href = prof.photo;
      };
      probe.src = prof.photo;
    }
  }
  document.addEventListener("error", (e) => {
    const im = e.target;
    if (im && im.tagName === "IMG" && im.dataset.fallback && im.src.indexOf(im.dataset.fallback) === -1) {
      im.src = im.dataset.fallback;
    }
  }, true);

  /* ---- Reveal on scroll ---- */
  function initReveal(root = document) {
    const els = root.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---- Modal ---- */
  let modal, lastFocus;
  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.innerHTML = `<button class="modal-close" aria-label="Close">${ICONS.close}</button><div class="modal-inner"></div>`;
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".modal-close")) closeModal(); });
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("open")) return;
      if (e.key === "Escape") closeModal();
      if (modal._onKey) modal._onKey(e);
    });
    return modal;
  }
  function openModal(html, onKey) {
    ensureModal();
    lastFocus = document.activeElement;
    modal.querySelector(".modal-inner").innerHTML = html;
    modal._onKey = onKey || null;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.querySelector(".modal-inner").innerHTML = "";
    modal._onKey = null;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  function openVideo(id) {
    const v = (window.SITE.videos || {})[id] || {};
    openModal(`
      <div class="frame"><iframe src="https://player.vimeo.com/video/${esc(id)}?autoplay=1&dnt=1&title=0&byline=0&portrait=0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(v.title || "Video")}"></iframe></div>
      <div class="caption"><span>${esc(v.title || "")}${v.year ? ` · ${v.year}` : ""}</span>
        <a href="https://vimeo.com/${esc(id)}" target="_blank" rel="noopener">Open on Vimeo ↗</a></div>`);
  }

  function videoCard(id) {
    const v = (window.SITE.videos || {})[id];
    if (!v) return "";
    return `<button class="video-card" type="button" data-video="${esc(id)}" aria-label="Play video: ${esc(v.title)}">
      <div class="vthumb">${v.thumb ? `<img src="${esc(v.thumb)}" alt="" loading="lazy">` : ""}
        <div class="play"><span>${ICONS.play}</span></div>
        ${v.duration ? `<span class="dur">${fmtDur(v.duration)}</span>` : ""}</div>
      <span class="vtitle">${esc(v.title)}</span>
      <span class="vyear">${esc(v.year || "")}</span>
    </button>`;
  }
  document.addEventListener("click", (e) => {
    const card = e.target.closest("[data-video]");
    if (card) { e.preventDefault(); openVideo(card.dataset.video); }
  });

  function monogram(name) {
    if (/&/.test(name) && /^\S+\s*&\s*\S+/.test(name)) {
      const m = String(name).match(/^(\S)\S*\s*&\s*(\S)/);
      if (m) return (m[1] + "&" + m[2]).toUpperCase();
    }
    const caps = String(name).match(/\b[A-Z]{2,5}\b/);
    if (caps) return caps[0];
    const words = String(name).replace(/[^A-Za-zÀ-ÿ\s]/g, " ").split(/\s+/)
      .filter((w) => w && !/^(the|of|and|de|du|la)$/i.test(w));
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  function logoTile(item, name) {
    if (item.logo) return `<span class="logo${item.logoPad ? " roomy" : ""}"><img src="${esc(item.logo)}" alt="${esc(name)} logo" loading="lazy"></span>`;
    return `<span class="mono">${esc(item.mono || monogram(name))}</span>`;
  }

  window.UI = { ICONS, esc, fmtDur, isExternal, isPdf, initChrome, initReveal, openModal, closeModal, openVideo, videoCard, monogram, logoTile };
})();
