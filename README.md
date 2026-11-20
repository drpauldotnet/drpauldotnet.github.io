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

Any static host works (GitHub Pages, Netlify, Cloudflare Pages, Vercel, or the current host).
Upload the whole folder; point the `paulpoinet.com` domain at it.
