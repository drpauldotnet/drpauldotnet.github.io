/* Homepage renderer */
(function () {
  const S = window.SITE, { ICONS, esc, videoCard, logoTile } = window.UI;
  const $ = (id) => document.getElementById(id);
  const p = S.profile;
  const current = S.experience[0];
  const currentRole = current.roles[0];
  const phd = S.education[0];
  const link = (l) => S.profile.links.find((x) => x.icon === l) || {};

  /* Profile card */
  $("profileCard").innerHTML = `
    <div class="profile-banner"><img src="${esc(p.banner)}" alt="" fetchpriority="high"></div>
    <div class="profile-body">
      <div class="profile-main">
        <img class="avatar" src="${esc(p.photo)}" data-fallback="${esc(p.photoFallback || "")}" alt="Portrait of ${esc(p.name)}" width="168" height="168">
        <h1>${esc(p.name)}</h1>
        <p class="headline">${esc(p.headline)}</p>
        ${p.subheadline ? `<p class="subheadline">${esc(p.subheadline)}</p>` : ""}
        <div class="profile-meta">
          <span>${ICONS.pin}${esc(p.location)}</span>
          <span>${ICONS.briefcase}${esc(currentRole.title + " at " + current.org)}</span>
        </div>
        <div class="profile-actions">
          <a class="btn btn-primary" href="mailto:${esc(p.email)}">${ICONS.mail}Get in touch</a>
          <a class="btn" href="${esc(p.links[0].url)}" target="_blank" rel="noopener">${ICONS.linkedin}LinkedIn</a>
          <a class="btn" href="${esc(p.portfolioPdf)}" target="_blank" rel="noopener">${ICONS.download}Portfolio 2012–19 (PDF)</a>
        </div>
      </div>
      <div class="profile-side">
        <a class="current" href="#experience">
          ${logoTile(current, current.org)}
          <div><small>Currently</small><strong>${esc(current.org)}</strong></div>
        </a>
        <a class="current" href="#experience" style="margin-top:8px">
          ${logoTile(phd, phd.school)}
          <div><small>Education</small><strong>PhD, ${esc(phd.school)}</strong></div>
        </a>
        <div class="socials">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener" aria-label="${esc(l.label)}" title="${esc(l.label)}">${ICONS[l.icon] || ICONS.external}</a>`).join("")}</div>
      </div>
    </div>
    <div class="highlights" style="--n:${p.highlights.length}">${p.highlights.map((h) => `<div class="highlight"><b>${esc(h.value)}</b><span>${esc(h.label)}</span></div>`).join("")}</div>`;

  /* About + skills */
  $("aboutText").innerHTML = p.about.map((t) => `<p>${esc(t)}</p>`).join("");
  $("skills").innerHTML = S.skills.map((g) => `
    <div class="group"><h3>${esc(g.group)}</h3><div class="tags">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("");

  /* Experience / education */
  /* "Show on map" links: find the pin whose entries point at this anchor
     (a direct entry first, otherwise a "Part of" reference). */
  const placeOf = (id) => {
    if (!id || !S.places) return -1;
    const h = "#" + id;
    const tiers = [
      (i) => !i.ref && (i.href === h || (i.also || []).includes(h)),   // main entry
      (i) => (i.children || []).some((c) => c.href === h),             // nested entry
      (i) => i.href === h                                              // "Part of" reference
    ];
    for (const t of tiers) { const k = S.places.findIndex((p) => p.items.some(t)); if (k >= 0) return k; }
    return -1;
  };
  const mapLink = (id) => {
    const idx = placeOf(id);
    if (idx < 0) return "";
    const pl = S.places[idx];
    return `<button type="button" class="map-link" data-map-place="${idx}" title="Show ${esc(pl.name)} on the map">${ICONS.pin}<span>${esc(pl.name)}</span></button>`;
  };
  const orgName = (e) => (e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.org)}</a>` : esc(e.org));
  const A = S.arc;
  $("arc").innerHTML = `
    <p class="arc-intro">${esc(A.intro)}</p>
    <ol class="arc-steps">${A.stages.map((s, i) => `
      <li class="arc-step${i === A.stages.length - 1 ? " now" : ""}">
        <span class="arc-num">${String(i + 1).padStart(2, "0")}</span>
        <strong>${esc(s.step)}</strong>
        <small>${esc(s.period)}</small>
        <p>${esc(s.text)}</p>
      </li>`).join("")}</ol>`;
  $("arcTitle").textContent = A.title;

  const roleLogo = (r) => (r.logo ? `<img class="role-logo" src="${esc(r.logo)}" alt="" loading="lazy">` : "");
  const lens = (e) => (e.lens ? `<p class="lens"><span>${esc(e.stage || "Product lens")}</span>${esc(e.lens)}</p>` : "");
  const roleBody = (r) => `
    ${r.description ? `<p class="desc">${esc(r.description)}</p>` : ""}
    ${r.bullets ? `<ul class="bullets">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
    ${r.note ? `<p class="desc note">${esc(r.note)}</p>` : ""}`;
  $("experienceList").innerHTML = S.experience.map((e) => {
    if (e.roles.length === 1) {
      const r = e.roles[0];
      return `<div class="entry"${e.id ? ` id="${esc(e.id)}"` : ""}>${logoTile(e, e.org)}<div>
        <h4>${esc(r.title)}</h4>
        <p class="org">${orgName(e)}</p>
        <p class="when">${esc([r.period, e.location].filter(Boolean).join(" · "))}${mapLink(e.id)}</p>
        ${lens(e)}
        ${roleBody(r)}</div></div>`;
    }
    if (e.list) {
      return `<div class="entry"${e.id ? ` id="${esc(e.id)}"` : ""}>${logoTile(e, e.org)}<div>
        <h4>${orgName(e)}</h4>
        <p class="when">${esc(e.location)}</p>
        ${lens(e)}
        <ul class="simple-list">${e.roles.map((r) => `<li${r.id ? ` id="${esc(r.id)}"` : ""}>
          ${logoTile(r, r.org || r.title)}
          <div><h5>${esc(r.title)}</h5><p class="when">${esc(r.period)}${mapLink(r.id)}</p>${roleBody(r)}</div></li>`).join("")}</ul></div></div>`;
    }
    return `<div class="entry"${e.id ? ` id="${esc(e.id)}"` : ""}>${logoTile(e, e.org)}<div>
      <h4>${orgName(e)}</h4>
      <p class="when">${esc(e.location)}${mapLink(e.id)}</p>
      ${lens(e)}
      <ol class="roles">${e.roles.map((r) => `<li>
        <h5>${roleLogo(r)}${esc(r.title)}</h5>
        <p class="when">${esc(r.period)}</p>
        ${roleBody(r)}</li>`).join("")}</ol></div></div>`;
  }).join("");
  $("educationList").innerHTML = S.education.map((e) => `
    <div class="entry"${e.id ? ` id="${esc(e.id)}"` : ""}>
      ${logoTile(e, e.school)}
      <div>
        <h4>${esc(e.degree)}</h4>
        <p class="org">${esc(e.school)}</p>
        <p class="when">${esc(e.period)}${mapLink(e.id)}</p>
        ${e.note ? `<p class="desc">${esc(e.note)}</p>` : ""}
      </div>
    </div>`).join("");

  $("certList").innerHTML = `
    <h3>Licences & certifications</h3>
    ${S.certifications.map((c) => `<div class="mini"><span class="dot">${ICONS.check}</span><div><strong>${esc(c.name)}</strong><small>${esc(c.issuer)}</small></div></div>`).join("")}
    <h3 style="margin-top:22px">Honours & awards</h3>
    ${S.honors.map((h) => `<div class="mini"><span class="dot">${ICONS.award}</span><div><strong>${esc(h.name)}</strong><small>${esc(h.year)}</small></div></div>`).join("")}`;

  /* Work grid */
  const cats = ["All", ...S.categories];
  $("filters").innerHTML = cats.map((c, i) => `<button class="filter" type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  $("workGrid").innerHTML = S.projects.map((pr, i) => `
    <a class="card work-card reveal${i === 0 ? " featured" : ""}" href="project.html?id=${encodeURIComponent(pr.id)}" data-cats="${esc(pr.categories.join("|"))}">
      <div class="thumb"><img src="${esc(pr.cover)}" alt="" loading="${i < 3 ? "eager" : "lazy"}">${pr.award ? `<span class="badge">${esc(pr.award)}</span>` : ""}</div>
      <div class="meta">
        <span class="year">${esc(pr.year)} · ${esc(pr.location)}</span>
        <h3>${esc(pr.title)}</h3>
        <p>${esc(pr.summary)}</p>
        <div class="tags">${pr.categories.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>
      </div>
    </a>`).join("");
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter"); if (!b) return;
    const cat = b.dataset.cat;
    $("filters").querySelectorAll(".filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
    const cards = [...$("workGrid").children];
    cards.forEach((c) => { c.hidden = !(cat === "All" || c.dataset.cats.split("|").includes(cat)); });
    // Featured layout only for the first visible card when showing all
    cards.forEach((c) => c.classList.remove("featured"));
    if (cat === "All") cards[0].classList.add("featured");
    cards.forEach((c) => c.classList.add("in"));
  });

  /* Publications */
  $("pubList").innerHTML = S.publications.map((pb) => `
    <article class="pub"${pb.id ? ` id="${esc(pb.id)}"` : ""}>
      <span class="y">${esc(pb.year)}</span>
      <a href="${esc(pb.url)}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">${pb.thumb ? `<img src="${esc(pb.thumb)}" alt="" loading="lazy">` : `<span class="pub-ph">${esc(pb.short || pb.type)}<small>${esc(pb.year)}</small></span>`}</a>
      <div>
        <h3><a href="${esc(pb.url)}" target="_blank" rel="noopener">${esc(pb.title)}</a></h3>
        <p class="authors">${esc(pb.authors).replace("Poinet P.", "<strong>Poinet P.</strong>")}</p>
        <p class="venue">${esc(pb.venue)}</p>
        <span class="chip">${esc(pb.type)}</span>
      </div>
    </article>`).join("");
  $("pubLinks").innerHTML = ["scholar", "researchgate"].map((k) => {
    const l = link(k);
    return l.url ? `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${ICONS[k]}${esc(l.label)}</a>` : "";
  }).join("");
  $("vmIcon").innerHTML = ICONS.external; $("vmIcon").style.display = "inline-flex";

  /* Videos */
  $("videoGroups").innerHTML = S.videoGroups.map((g) => `
    <div class="video-group reveal">
      <h3>${esc(g.name)} <span class="count">${g.ids.length}</span></h3>
      <div class="video-grid">${g.ids.map(videoCard).join("")}</div>
    </div>`).join("");

  /* Contact */
  $("contactCard").innerHTML = `
    <div>
      <p class="eyebrow">Contact</p>
      <h2>Let's talk</h2>
      <p>Open to conversations about openBIM, AEC data workflows, computational design and research collaborations.</p>
      <div class="profile-actions"><a class="btn btn-primary" href="mailto:${esc(p.email)}">${ICONS.mail}${esc(p.email)}</a></div>
    </div>
    <div class="contact-links">${p.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener"><span>${ICONS[l.icon] || ""}${esc(l.label)}</span>${ICONS.arrowRight}</a>`).join("")}</div>`;

  /* Active nav link */
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  window.UI.initChrome();
  window.UI.initReveal();
})();
