# paulpoinet.com

Static personal site — no build step, no framework. Open `index.html` in a browser to preview.

## Structure

```
index.html            Profile, about, experience, work grid, publications, videos, contact
project.html          Project detail page (project.html?id=<project id>)
assets/js/data.js     ALL site content — edit this to update the site
assets/js/common.js   Icons, theme toggle, nav, video modal
assets/js/home.js     Renders index.html from data.js
assets/js/project.js  Renders project.html from data.js
assets/css/style.css  Styles (light + dark mode)
assets/img/           Project images (resized to max 1800px)
assets/pub/           Publication thumbnails
assets/docs/          Portfolio PDF, PhD thesis, abstract, defence slides
```

## Editing

- **Text, jobs, education, skills:** `assets/js/data.js` → `profile`, `experience`, `education`, `skills`.
  Search for `TODO` for entries that still need confirming.
- **New project:** add an object to `projects` (copy an existing one), drop images in `assets/img/`.
  The first project in the list is shown as the large featured card.
- **New publication:** add to `publications`.
- **New Vimeo video:** add its id and metadata to `videos`, then list the id in a `videoGroups` entry
  and/or a project's `videos` array. Thumbnails: `https://vimeo.com/api/oembed.json?url=https://vimeo.com/<id>`.

## Hosting

Hosted on GitHub Pages from the `main` branch of
[drpauldotnet/drpauldotnet.github.io](https://github.com/drpauldotnet/drpauldotnet.github.io).
Every push to `main` redeploys the site at <https://drpauldotnet.github.io/> within a minute or two.

```
git add -A
git commit -m "Update content"
git push
```

### Custom domain (paupoi.net)

1. At the domain registrar, add these DNS records:

   | Type  | Host  | Value |
   |-------|-------|-------|
   | A     | `@`   | 185.199.108.153 |
   | A     | `@`   | 185.199.109.153 |
   | A     | `@`   | 185.199.110.153 |
   | A     | `@`   | 185.199.111.153 |
   | AAAA  | `@`   | 2606:50c0:8000::153 |
   | AAAA  | `@`   | 2606:50c0:8001::153 |
   | AAAA  | `@`   | 2606:50c0:8002::153 |
   | AAAA  | `@`   | 2606:50c0:8003::153 |
   | CNAME | `www` | drpauldotnet.github.io |

2. Once `nslookup paupoi.net` returns the GitHub IPs, set the domain in
   **Repo → Settings → Pages → Custom domain** (or
   `gh api -X PUT repos/drpauldotnet/drpauldotnet.github.io/pages -f cname=paupoi.net`),
   then tick **Enforce HTTPS** once the certificate is issued.
3. Recommended: verify the domain under **GitHub → Settings → Pages → Add a domain**
   so no other account can claim it.

Preview locally with `python -m http.server 8000` (YouTube embeds need http, not file://).
