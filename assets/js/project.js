/* Project detail renderer */
(function () {
  const S = window.SITE, { ICONS, esc, videoCard, isExternal, isPdf, openModal } = window.UI;
  const main = document.getElementById("main");
  const id = new URLSearchParams(location.search).get("id");
  const idx = S.projects.findIndex((p) => p.id === id);

  if (idx < 0) {
    main.innerHTML = `<a class="back" href="index.html#work">${ICONS.arrowLeft}All projects</a>
      <h1 style="font-family:var(--font-display);font-weight:500;font-size:44px">Project not found</h1>
      <p style="color:var(--muted)">This project doesn't exist or has moved. <a href="index.html#work">Browse all projects</a>.</p>`;
    window.UI.initChrome();
    return;
  }

  const p = S.projects[idx];
  const prev = S.projects[(idx - 1 + S.projects.length) % S.projects.length];
  const next = S.projects[(idx + 1) % S.projects.length];
  const imgs = (p.images || []).map((f) => "assets/img/" + f);

  document.title = `${p.title} — Paul Poinet`;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", p.summary);

  const linkIcon = (url) => (isPdf(url) ? ICONS.file : isExternal(url) ? ICONS.external : ICONS.arrowRight);

  main.innerHTML = `
    <a class="back" href="index.html#work">${ICONS.arrowLeft}All projects</a>
    <div class="p-hero${p.heroFit === "contain" ? " contain" : ""}"><img src="${esc(p.cover)}" alt="${esc(p.title)}" fetchpriority="high"></div>

    <div class="p-head">
      <div>
        <p class="eyebrow">${esc(p.year)}${p.award ? " · " + esc(p.award) : ""}</p>
        <h1>${esc(p.title)}</h1>
        <p class="sub">${esc(p.subtitle)}</p>
        <div class="p-body">${p.body.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
      </div>
      <aside class="card p-side" aria-label="Project details">
        <dl>
          <div><dt>Year</dt><dd>${esc(p.year)}</dd></div>
          <div><dt>Location</dt><dd>${esc(p.location)}</dd></div>
          <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Disciplines</dt><dd class="tags">${p.categories.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</dd></div>
        </dl>
        ${p.links && p.links.length ? `<div class="p-links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}${linkIcon(l.url)}</a>`).join("")}</div>` : ""}
      </aside>
    </div>

    ${p.specs ? `<section class="p-section"><h2>The works</h2><div class="specs">${p.specs.map((s) => `
      <div class="card spec"><h3>${esc(s.name)}</h3><dl>${s.rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl></div>`).join("")}</div></section>` : ""}

    ${p.videos && p.videos.length ? `<section class="p-section"><h2>Video${p.videos.length > 1 ? "s" : ""}</h2>
      <div class="p-videos">${p.videos.map(videoCard).join("")}</div></section>` : ""}

    ${p.youtube ? `<section class="p-section"><h2>${esc(p.youtubeCaption || "Presentation")}</h2>
      <div class="embed"><button type="button" class="yt-facade" data-yt="${esc(p.youtube)}" aria-label="Play video: ${esc(p.youtubeCaption || p.title)}">
        <img src="https://i.ytimg.com/vi/${esc(p.youtube)}/hqdefault.jpg" alt="" loading="lazy">
        <span class="yt-play">${ICONS.play}</span>
        <span class="yt-label">Watch on YouTube</span></button></div></section>` : ""}

    ${imgs.length ? `<section class="p-section"><h2>Gallery</h2>
      <div class="gallery">${imgs.map((src, i) => `<button type="button" data-lb="${i}" aria-label="Open image ${i + 1} of ${imgs.length}"><img src="${esc(src)}" alt="${esc(p.title)} — image ${i + 1}" loading="lazy"></button>`).join("")}</div></section>` : ""}

    ${p.credits && p.credits.length ? `<section class="p-section"><h2>Credits</h2>
      <div class="card credits"><dl>${p.credits.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl></div></section>` : ""}

    <nav class="p-pager" aria-label="More projects">
      <a class="card" href="project.html?id=${encodeURIComponent(prev.id)}"><small>${ICONS.arrowLeft}Previous</small><strong>${esc(prev.title)}</strong></a>
      <a class="card next" href="project.html?id=${encodeURIComponent(next.id)}"><small>Next${ICONS.arrowRight}</small><strong>${esc(next.title)}</strong></a>
    </nav>`;

  /* YouTube: load the player on click. YouTube refuses embeds without a referrer
     (Error 153), which is the case when the page is opened as a local file —
     there we open the video on YouTube instead. */
  main.addEventListener("click", (e) => {
    const b = e.target.closest(".yt-facade"); if (!b) return;
    const id = b.dataset.yt;
    if (!/^https?:$/.test(location.protocol)) { window.open(`https://www.youtube.com/watch?v=${id}`, "_blank", "noopener"); return; }
    const f = document.createElement("iframe");
    f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    f.title = b.getAttribute("aria-label");
    f.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    f.referrerPolicy = "strict-origin-when-cross-origin";
    f.allowFullscreen = true;
    b.replaceWith(f);
  });

  /* Lightbox */
  let cur = 0;
  function show(i) {
    cur = (i + imgs.length) % imgs.length;
    openModal(`<div class="lightbox"><img src="${esc(imgs[cur])}" alt="${esc(p.title)} — image ${cur + 1}"></div>
      <div class="lb-count">${cur + 1} / ${imgs.length}</div>
      ${imgs.length > 1 ? `<button class="lb-nav lb-prev" type="button" aria-label="Previous image">${ICONS.chevronLeft}</button>
      <button class="lb-nav lb-next" type="button" aria-label="Next image">${ICONS.chevronRight}</button>` : ""}`,
      (e) => { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
  }
  main.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lb]");
    if (b) show(+b.dataset.lb);
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".lb-prev")) { e.stopPropagation(); show(cur - 1); }
    else if (e.target.closest(".lb-next")) { e.stopPropagation(); show(cur + 1); }
  }, true);

  window.UI.initChrome();
})();
