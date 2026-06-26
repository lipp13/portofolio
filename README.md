# Personal Portfolio

Website portofolio pribadi modern, minimalis, dan production-ready. Dibangun dengan React, Vite, Tailwind CSS, dan Framer Motion.

## Tech Stack

- **React.js** (JSX) — UI library
- **Vite** — Build tool & dev server
- **JavaScript (ES6+)** — Tanpa TypeScript
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animasi halus
- **Tabler Icons** — Icon set

## Fitur

- Dark mode default dengan palet hitam/abu-abu + aksen biru-ungu
- Responsive (desktop, tablet, mobile)
- SEO friendly (meta tags, semantic HTML)
- Loading screen
- Custom cursor (desktop)
- Scroll progress indicator
- Back to top button
- Smooth scrolling & fade-in animations
- Glassmorphism & gradient effects
- Semua data terpusat di `src/data/portfolioData.js`

## Struktur Folder

```
src/
├── components/       # Reusable UI components
├── sections/         # Page sections (Hero, About, etc.)
├── data/
│   └── portfolioData.js
├── assets/           # Images & static assets
├── hooks/            # Custom React hooks
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd my-porto

# Install dependencies
npm install

# Start development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Kustomisasi

Semua konten portofolio dapat diubah melalui satu file:

**`src/data/portfolioData.js`**

Edit data berikut sesuai kebutuhan:

| Key | Deskripsi |
|-----|-----------|
| `personal` | Nama, role, tagline, foto profil, CV |
| `social` | Link GitHub, LinkedIn, Instagram, Email |
| `about` | Perkenalan, passion, fokus, tujuan karier, statistik |
| `skills` | Tech stack per kategori |
| `projects` | Daftar project dengan filter kategori |
| `experience` | Timeline pengalaman kerja |
| `achievements` | Sertifikat, kompetisi, kursus, penghargaan |
| `contact` | CTA dan subtitle section contact |

### Foto Profil

Ganti file `src/assets/hero.png` dengan foto profil Anda, atau ubah path di `portfolioData.js`.

### CV Download

Letakkan file CV (PDF) di folder `public/cv.pdf`, atau ubah `personal.cvUrl` di data file.

### SEO

Update meta tags di `index.html` (title, description, Open Graph).

## Deploy ke Vercel

### Via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Via GitHub

1. Push repository ke GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik **Add New Project**
4. Import repository GitHub Anda
5. Vercel akan otomatis mendeteksi Vite — tidak perlu konfigurasi tambahan
6. Klik **Deploy**

File `vercel.json` sudah disertakan untuk SPA routing.

### Environment Variables

Tidak diperlukan environment variables untuk setup dasar.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## License

MIT

Thanks for seeing this repo.