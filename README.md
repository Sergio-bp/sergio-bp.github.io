# 👋 Hi, I'm Sergio

DevOps Developer at **AIR Institute**. I come from backend development and now focus on getting software from the repository to production reliably: containers, orchestration, infrastructure as code and CI/CD.

This repository contains my personal portfolio: **[sergio-bp.github.io](https://sergio-bp.github.io)**

---

## 👨‍💻 About Me

- DevOps Developer at AIR Institute
- Degree in Computer Engineering in Information Systems, University of Salamanca (Zamora campus)
- Day to day: Docker, Kubernetes, Terraform and CI/CD pipelines

---

## 🛠️ Tech Stack

- **React 19** and **Vite 7**
- **Tailwind CSS 4**, with the colour palette defined as theme tokens in `src/index.css`
- **Geist** font, self-hosted (the site makes no requests to font providers)
- **React Icons**
- **GitHub Actions** and **GitHub Pages** for CI/CD

---

## ✨ Highlights

- **Prerendered at build time:** the HTML already contains the whole page, so it shows up without JavaScript and to crawlers; React then hydrates it
- **English / Spanish** with a toggle; the browser language is used until the visitor picks one, and Spanish visitors never see the English HTML first
- **Light monochrome design**, responsive down to mobile
- **Accessible:** skip link, labelled controls, visible keyboard focus, reduced-motion support
- **SEO:** meta description, 1200×630 Open Graph image, schema.org `Person` data

---

## 📁 Project Structure

The app lives in `Portfolio/my-project-vite`:

| Path | Contents |
| --- | --- |
| `src/translations.js` | All texts, in English and Spanish |
| `src/data.js` | Skills, contact links and projects |
| `src/App.jsx` | Page layout and sections |
| `src/index.css` | Font, colour tokens and global styles |
| `src/entry-server.js`, `scripts/prerender.js` | Build-time prerendering |
| `scripts/og-image.html` | Source of the social preview image (`public/og-image.png`) |

To show a project, add it to `projects` in `src/data.js`: the Projects section renders it automatically.

---

## 🚀 Local Development

```bash
cd Portfolio/my-project-vite
npm ci
npm run dev       # dev server with hot reload
npm run lint
npm run build     # production build, prerendered into dist/
npm run preview   # serve dist/ locally
```

---

## 🌍 CI/CD

- **CI** (`.github/workflows/ci.yml`): lint and build on every push and pull request to `main` and `develop`
- **Deploy** (`.github/workflows/deploy.yml`): every push to `main` builds the site and publishes it to GitHub Pages
- **Branch flow:** `feature/*` → `develop` → `main`

---

## 📫 Contact

- [GitHub](https://github.com/Sergio-bp)
- [LinkedIn](https://www.linkedin.com/in/sergio-barrios-portales-454422289/)
- [Email](mailto:sergio.barpor@gmail.com?subject=Contacto&body=Hola%20Sergio)
