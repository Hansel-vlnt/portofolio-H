# Portofolio AI Engineer: Hansel Valent Evanthe (`portofolio-H`)

Landing page portofolio rekayasa kecerdasan buatan untuk **Hansel Valent Evanthe** ([@Hansel-vlnt](https://github.com/Hansel-vlnt), Universitas Negeri Medan) dengan pendekatan artistik **Web 2.0 Optical Gloss & Frutiger Aero** berbasis 2D CSS dan SVG murni.

## Arsitektur Teknis
- **Astro 5**: Static HTML generation dengan hidrasi skrip progresif minimal.
- **Tailwind CSS v4 + `frutiger-aero.css`**: Sistem material optik 2D (*split-horizon specular gel*, *daylight aurora SVG*, *acrylic plates*, dan kontras terverifikasi WCAG AA).
- **Lenis**: *Smooth inertia scrolling* yang menghormati preferensi `prefers-reduced-motion`.
- **Native Web Platform**: Modal arsitektur dan navigasi seluler berbasis `<dialog closedby="any">` lengkap dengan fallback lintas peramban.

## Menjalankan Proyek Secara Lokal

```bash
npm install
npm run dev
```

Pemeriksaan tipe, build produksi, dan verifikasi integritas output:

```bash
npm run check
npm run build
node scripts/verify-portfolio.mjs
```
