# Roggies' Flooring Center: website rebuild (demo)

A rebuild of [roggiesflooring.com](https://www.roggiesflooring.com/) as a static Jekyll site for GitHub Pages.
The demo preview runs at **https://rfc.evanjennings.com**.

## Structure

| Path | Page |
| --- | --- |
| `index.html` | Home |
| `flooring.html` | Flooring (`/flooring/`) |
| `rugs-and-binding.html` | Area rugs & carpet binding (`/rugs-and-binding/`) |
| `installation.html` | Installation (`/installation/`) |
| `about.html` | About (`/about/`) |
| `contact.html` | Contact (`/contact/`), with a demo form that isn't connected yet |
| `_config.yml` | Business details (phone, hours, address), nav, and the `demo` flag |
| `_layouts/`, `_includes/` | Shared page shell, header, footer |
| `assets/` | CSS, JS, images |

Phone, email, address and hours live in `_config.yml` under `business:`, so you can update them in one place.

## Run locally

```bash
gem install jekyll
jekyll serve
```

Then open http://localhost:4000.

## Hosting on GitHub Pages

1. In the repo, go to **Settings → Pages**, set **Source** to *Deploy from a branch*, and pick the branch and `/ (root)`.
2. The `CNAME` file sets the custom domain to `rfc.evanjennings.com`.
3. In the DNS for `evanjennings.com`, add a record: `CNAME  rfc  →  evan-qc.github.io`.
4. Once the certificate is issued, tick **Enforce HTTPS**.

## Going live on roggiesflooring.com

- Set `demo: false` in `_config.yml`. This removes the `noindex` tag and opens up `robots.txt`.
- Change `url` in `_config.yml` and the `CNAME` file to `www.roggiesflooring.com`.
- Connect the contact form to a form service (for example Formspree) and remove the demo note in `contact.html`.
