/* Interactive map of international experience (Leaflet + Natural Earth vector basemap) */
(function () {
  const S = window.SITE, { esc } = window.UI;
  const el = document.getElementById("worldMap");
  const listEl = document.getElementById("mapList");
  const filtersEl = document.getElementById("mapFilters");
  if (!el || !S.places) return;

  const TYPES = S.placeTypes;
  const active = new Set(Object.keys(TYPES));
  const countries = new Set(S.places.map((p) => p.country)).size;
  // `ref` parents (e.g. the PhD shown above a conference held elsewhere) give
  // context only — they are not counted as entries for that pin.
  const flat = (p) => p.items.flatMap((i) => [...(i.ref ? [] : [i]), ...(i.children || [])]);
  const total = S.places.reduce((n, p) => n + flat(p).length, 0);
  document.getElementById("mapSummary").textContent =
    `${S.places.length} cities, ${countries} countries, ${total} entries — where I've worked, studied, taught, presented and built. Click a pin, then an entry to jump to it.`;

  /* Filters */
  // Each type: click = toggle, "only" = show just this type. Plus All / None.
  filtersEl.innerHTML =
    `<span class="map-bulk"><button type="button" class="map-bulk-btn" data-bulk="all">All</button><button type="button" class="map-bulk-btn" data-bulk="none">None</button></span>` +
    Object.entries(TYPES).map(([k, label]) =>
      `<span class="map-chip" data-type="${k}">
        <button class="filter map-filter" type="button" aria-pressed="true" data-type="${k}" title="Show / hide ${esc(label)}"><span class="tdot t-${k}"></span>${esc(label)}</button>
        <button class="map-only" type="button" data-only="${k}" aria-label="Show only ${esc(label)}" title="Show only ${esc(label)}">only</button>
      </span>`).join("");

  // All visible entries (parents + nested children), used for counts.
  const visibleItems = (p) => flat(p).filter((i) => active.has(i.type));

  /* Jump to a target: anchor on this page (with highlight) or project page */
  function go(href) {
    if (href.charAt(0) !== "#") { location.href = href; return; }
    const t = document.querySelector(href);
    if (!t) return;
    t.scrollIntoView({ behavior: "smooth", block: "center" });
    t.classList.remove("flash"); void t.offsetWidth; t.classList.add("flash");
    history.replaceState(null, "", href);
  }

  const itemHtml = (i, child) => `
    <a class="map-item${child ? " child" : ""}${i.ref ? " ref" : ""}" href="${esc(i.href)}" data-go="${esc(i.href)}">
      <span class="tdot t-${i.type}" title="${esc(TYPES[i.type])}"></span>
      <span>${i.ref ? "<em>Part of</em>" : ""}<strong>${esc(i.title)}</strong><small>${esc(TYPES[i.type])} · ${esc(i.when)}</small></span>
    </a>`;
  // Parent entry followed by its nested projects. If the parent's type is
  // filtered out, its visible children are shown at top level instead.
  const itemsHtml = (p) => p.items.map((i) => {
    const kids = (i.children || []).filter((c) => active.has(c.type));
    if (!active.has(i.type)) return kids.map((c) => itemHtml(c, false)).join("");
    return itemHtml(i, false) + (kids.length ? `<div class="map-children">${kids.map((c) => itemHtml(c, true)).join("")}</div>` : "");
  }).join("");

  /* Side list (also the fallback if the map library can't load) */
  function renderList() {
    const shown = S.places.filter((p) => visibleItems(p).length);
    listEl.innerHTML = shown.length ? shown.map((p) => `
      <details class="map-place" data-place="${S.places.indexOf(p)}">
        <summary><span>${esc(p.name)}</span><small>${esc(p.country)} · ${visibleItems(p).length}</small></summary>
        <div class="map-items">${itemsHtml(p)}</div>
      </details>`).join("")
      : `<p class="map-empty">No category selected. Pick one above, or <button type="button" class="map-bulk-btn" data-bulk="all">show all</button>.</p>`;
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-go]");
    if (!a) return;
    e.preventDefault();
    if (map) map.closePopup();
    go(a.dataset.go);
  });

  let map = null, markers = [], quiet = false;

  function initMap() {
    if (typeof L === "undefined") { el.classList.add("map-fallback"); el.innerHTML = "<p>The map could not load — browse the places in the list.</p>"; return; }
    // Vector basemap: Natural Earth countries (no tile server / API key needed).
    map = L.map(el, {
      scrollWheelZoom: false, zoomSnap: 0.25, minZoom: 1.5, maxZoom: 7,
      maxBounds: [[-60, -180], [85, 190]], maxBoundsViscosity: 0.8, attributionControl: true
    });
    map.attributionControl.setPrefix(false).addAttribution('Natural Earth');

    const VISITED_NAME = { "Hong Kong SAR": "Hong Kong" };
    const visited = new Set(S.places.map((p) => VISITED_NAME[p.country] || p.country));
    const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
    let countries = null;
    const style = (f) => {
      const v = visited.has(f.properties.name);
      return { color: css("--line"), weight: 0.7, fillColor: v ? css("--accent-soft") : css("--surface"), fillOpacity: 1 };
    };
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json")
      .then((r) => r.json())
      .then((topo) => {
        const geo = topojson.feature(topo, topo.objects.countries);
        geo.features = geo.features.filter((f) => f.properties.name !== "Antarctica");
        // Unwrap rings that cross the antimeridian (Russia, Fiji…) to avoid stray bands.
        const fixRing = (ring) => {
          const crosses = ring.some((c) => c[0] > 170) && ring.some((c) => c[0] < -170);
          return crosses ? ring.map(([x, y]) => [x < 0 ? x + 360 : x, y]) : ring;
        };
        geo.features.forEach((f) => {
          const g = f.geometry; if (!g) return;
          if (g.type === "Polygon") g.coordinates = g.coordinates.map(fixRing);
          else if (g.type === "MultiPolygon") g.coordinates = g.coordinates.map((poly) => poly.map(fixRing));
        });
        countries = L.geoJSON(geo, { style, interactive: false }).addTo(map);
        countries.bringToBack();
      })
      .catch(() => {});
    const restyle = () => countries && countries.setStyle(style);
    new MutationObserver(restyle).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", restyle);

    // World / Europe view buttons
    const Views = L.Control.extend({
      options: { position: "topright" },
      onAdd() {
        const d = L.DomUtil.create("div", "map-views");
        d.innerHTML = '<button type="button" data-view="world">World</button><button type="button" data-view="europe">Europe</button>';
        L.DomEvent.disableClickPropagation(d);
        d.addEventListener("click", (e) => {
          const b = e.target.closest("button"); if (!b) return;
          if (b.dataset.view === "europe") map.flyToBounds([[35, -6], [60, 26]], { duration: 0.8 });
          else if (markers.length) map.flyToBounds(L.featureGroup(markers).getBounds().pad(0.12), { duration: 0.8 });
          else map.flyTo([30, 20], 2, { duration: 0.8 });
        });
        return d;
      }
    });
    new Views().addTo(map);

    el.addEventListener("click", () => map.scrollWheelZoom.enable(), { once: true });
    drawMarkers(true);
  }

  function drawMarkers(fit) {
    if (!map) return;
    markers.forEach((m) => m.remove()); markers = [];
    S.places.forEach((p, idx) => {
      const items = visibleItems(p);
      if (!items.length) return;
      const n = items.length;
      const size = n >= 6 ? 32 : n >= 3 ? 27 : 22;
      const icon = L.divIcon({ className: "pin-wrap", html: `<span class="pin" style="width:${size}px;height:${size}px">${n}</span>`, iconSize: [size, size], iconAnchor: [size / 2, size / 2] });
      const m = L.marker([p.lat, p.lng], { icon, title: `${p.name} — ${n} entr${n > 1 ? "ies" : "y"}`, riseOnHover: true })
        .bindPopup(`<div class="map-pop"><h4>${esc(p.name)} <small>${esc(p.country)}</small></h4>${itemsHtml(p)}</div>`, { maxWidth: 340, minWidth: 260 })
        .addTo(map);
      m.on("click", () => {
        const d = listEl.querySelector(`[data-place="${idx}"]`);
        if (d) { quiet = true; listEl.querySelectorAll("details").forEach((x) => (x.open = x === d)); d.scrollIntoView({ block: "nearest" }); setTimeout(() => (quiet = false), 50); }
      });
      m._placeIdx = idx;
      markers.push(m);
    });
    if (fit && markers.length) map.fitBounds(L.featureGroup(markers).getBounds().pad(0.12));
  }

  /* Clicking a place name in the list flies the map there */
  listEl.addEventListener("toggle", (e) => {
    const d = e.target;
    if (!d.open || !map || quiet) return;
    const p = S.places[+d.dataset.place];
    const m = markers.find((x) => x._placeIdx === +d.dataset.place);
    map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 5), { duration: 0.8 });
    if (m) setTimeout(() => m.openPopup(), 850);
  }, true);

  function applyFilters() {
    filtersEl.querySelectorAll(".map-filter").forEach((b) => b.setAttribute("aria-pressed", active.has(b.dataset.type)));
    const all = Object.keys(TYPES);
    filtersEl.querySelector('[data-bulk="all"]').setAttribute("aria-pressed", active.size === all.length);
    filtersEl.querySelector('[data-bulk="none"]').setAttribute("aria-pressed", active.size === 0);
    renderList(); drawMarkers(false);
  }

  document.addEventListener("click", (e) => {
    const bulk = e.target.closest("[data-bulk]");
    const only = e.target.closest("[data-only]");
    const tog = e.target.closest(".map-filter");
    if (!bulk && !only && !tog) return;
    if (bulk) {
      active.clear();
      if (bulk.dataset.bulk === "all") Object.keys(TYPES).forEach((k) => active.add(k));
    } else if (only) {
      active.clear(); active.add(only.dataset.only);
    } else {
      const k = tog.dataset.type;
      active.has(k) ? active.delete(k) : active.add(k);
    }
    applyFilters();
  });
  // Double-click a type = show only that type
  filtersEl.addEventListener("dblclick", (e) => {
    const tog = e.target.closest(".map-filter"); if (!tog) return;
    active.clear(); active.add(tog.dataset.type); applyFilters();
  });

  /* "Show on map" links from the experience / education lists */
  function focusPlace(idx) {
    const p = S.places[idx]; if (!p) return;
    // Make sure the place is visible: reset filters if it is filtered out.
    if (!visibleItems(p).length) { Object.keys(TYPES).forEach((k) => active.add(k)); applyFilters(); }
    document.getElementById("map").scrollIntoView({ behavior: "smooth", block: "start" });
    const d = listEl.querySelector(`[data-place="${idx}"]`);
    if (d) { quiet = true; listEl.querySelectorAll("details").forEach((x) => (x.open = x === d)); setTimeout(() => (quiet = false), 50); d.scrollIntoView({ block: "nearest" }); }
    if (!map) return;
    setTimeout(() => {
      map.flyTo([p.lat, p.lng], Math.max(map.getZoom(), 5), { duration: 0.9 });
      const m = markers.find((x) => x._placeIdx === idx);
      if (m) setTimeout(() => m.openPopup(), 950);
    }, 450);
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-map-place]"); if (!b) return;
    e.preventDefault();
    focusPlace(+b.dataset.mapPlace);
  });

  renderList();
  initMap();
  applyFilters();
})();
