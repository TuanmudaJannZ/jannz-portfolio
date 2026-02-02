# 🚀 Portofolio JannZ - Cyber Security Specialist

![Portfolio Preview](https://img.shields.io/badge/Portfolio-JannZ-blue)
![React](https://img.shields.io/badge/React-18.2-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-06B6D4)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

<div align="center">
  
![Portfolio Screenshot](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&auto=format)

**Portofolio profesional dengan tema cosmic/nebula untuk JannZ - Cyber Security Enthusiast & Bug Hunter**

[🌐 Live Demo](https://tuanmudajannz.github.io/jannz-portfolio/) • [📖 Dokumentasi](#dokumentasi) • [🚀 Deploy](#deployment) • [💻 Kode](#struktur-proyek) • [📞 Kontak](#kontak)

</div>

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🎨 **Design Modern** | Tema cosmic/nebula dengan efek partikel interaktif |
| 📱 **Full Responsive** | Optimal di mobile, tablet, dan desktop |
| ⚡ **High Performance** | Loading cepat dengan code splitting |
| 🌌 **Animasi Smooth** | Transisi dengan Framer Motion & AOS |
| 🛡️ **Security Focus** | Konten untuk cybersecurity professional |
| 📧 **Contact Form** | Form kontak dengan EmailJS integration |
| 🎯 **SEO Optimized** | Meta tags dan struktur semantic HTML |
| 🌙 **Dark Theme** | Tema gelap dengan efek neon |

## 🛠️ Teknologi Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom Animations
- **Animasi:** Framer Motion + AOS (Animate On Scroll)
- **Background:** TSParticles (Cosmic Particles)
- **Icons:** React Icons
- **Form:** EmailJS
- **Deployment:** GitHub Pages / Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ & npm/yarn

### Installation
```bash
# Clone repository
git clone https://github.com/TuanmudaJannZ/jannz-portfolio.git
cd jannz-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

## 📁 Struktur Proyek

```
jannz-portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Hero section
│   │   ├── About.jsx    # About section
│   │   ├── Skills.jsx   # Skills section
│   │   ├── Projects.jsx # Projects showcase
│   │   ├── Certificates.jsx # Certifications
│   │   ├── Contact.jsx  # Contact form
│   │   ├── Navbar.jsx   # Navigation
│   │   ├── Footer.jsx   # Footer
│   │   └── ParticlesBackground.jsx # Particle effects
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Sections

### 1. **Hero Section**
- Animasi typewriter untuk role dinamis
- Background particle cosmic
- CTA buttons: View Work & Contact

### 2. **About Section**
- Profil profesional JannZ
- Feature cards dengan icon
- Progress bars animasi

### 3. **Skills Section**
- Kategori skill (Web Dev, Security Tools, Lainnya)
- Progress bars dengan persentase
- Icons untuk setiap skill

### 4. **Projects Section**
- Grid projects dengan card
- Tags teknologi
- Link GitHub & Live Demo

### 5. **Certificates Section**
- Grid sertifikasi (desktop)
- Carousel sertifikasi (mobile)
- Pencapaian tambahan

### 6. **Contact Section**
- Form kontak dengan validasi
- Metode kontak alternatif
- Status ketersediaan

## 🔧 Konfigurasi

### Tailwind Config
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'neon-blue': '#00f3ff',
      'neon-purple': '#b967ff',
      'cosmic-dark': '#0a0a1a',
      'cosmic-darker': '#050510',
    },
    animation: {
      'gradient': 'gradient 8s linear infinite',
      'float': 'float 6s ease-in-out infinite',
    }
  }
}
```

### Vite Config
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/jannz-portfolio/', // Untuk GitHub Pages
})
```

## 📦 Deployment

### GitHub Pages
```bash
# Build project
npm run build

# Deploy to GitHub Pages
npm run deploy

# Atau manual
npx gh-pages -d dist
```

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TuanmudaJannZ/jannz-portfolio)

```bash
# Push to GitHub
git push origin main

# Import to Vercel - automatic deployment
```

### Custom Domain (portofolio.jannz.my.id)
1. Update `vite.config.js`:
   ```javascript
   base: '/'  // Remove subpath for custom domain
   ```
2. Update `package.json`:
   ```json
   "homepage": "https://portofolio.jannz.my.id"
   ```
3. Set custom domain di GitHub Pages settings
4. Add CNAME record di DNS provider

## 🎯 SEO & Performance

✅ **SEO Optimized:**
- Meta tags untuk deskripsi & keywords
- Semantic HTML structure
- Open Graph tags untuk social media

✅ **Performance Optimized:**
- Code splitting dengan React.lazy
- Optimized images
- Minified CSS & JS
- Lazy loading komponen

✅ **Accessibility:**
- ARIA labels
- Keyboard navigation
- Color contrast compliance

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | < 640px | Hamburger menu, carousel certs |
| Tablet | 640px - 1024px | Grid layouts, responsive text |
| Desktop | > 1024px | Full features, particle effects |

## 🔒 Security Features

- Sanitized form inputs
- HTTPS enforcement
- Secure API calls
- XSS protection
- CSP headers (production)

## 🔧 Customization

### Ubah Informasi Pribadi
1. **Hero Section**: `src/components/Hero.jsx`
2. **About Section**: `src/components/About.jsx`
3. **Contact Info**: `src/components/Contact.jsx`
4. **Social Links**: `src/components/Footer.jsx`

### Ubah Skills
Edit `src/components/Skills.jsx`:
```javascript
const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  // Tambah skill baru...
]
```

### Ubah Projects
Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tags: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://demo.example.com"
  }
]
```

## 🐛 Troubleshooting

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5173 already in use | `npm run dev -- --port 3000` |
| Particles not showing | Check `ParticlesBackground.jsx` config |
| AOS animations not working | Verify AOS init in `main.jsx` |
| Tailwind classes not working | Run `npx tailwindcss -i ./src/index.css -o ./src/output.css --watch` |
| Build errors | Delete `node_modules` & `package-lock.json`, then `npm install` |

### Error: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Error: Failed to deploy
```bash
# Check gh-pages branch
git branch -a

# Force deploy
npx gh-pages -d dist -t true -f
```

## 📈 Analytics (Optional)

Tambahkan Google Analytics:
```javascript
// index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

Kontribusi dipersilakan! Ikuti langkah:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Design inspiration from [EkiZR Portfolio_V5](https://eki.my.id)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Particles by [TSParticles](https://particles.js.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Kontak

**JannZ** - Cyber Security Enthusiast

- 🌐 Website: [portofolio.jannz.my.id](https://tuanmudajannz.github.io/jannz-portfolio/)
- 📧 Email: contact@jannz.my.id
- 💬 Telegram: [@TuanJannZ](https://t.me/TuanJannZ)
- 🐙 GitHub: [@TuanmudaJannZ](https://github.com/TuanmudaJannZ)
- 🛡️ LegionX: Leader

---

<div align="center">

**⭐ Jika project ini membantu, berikan star di GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/TuanmudaJannZ/jannz-portfolio?style=social)](https://github.com/TuanmudaJannZ/jannz-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TuanmudaJannZ/jannz-portfolio?style=social)](https://github.com/TuanmudaJannZ/jannz-portfolio/network/members)

**Dibuat dengan ❤️ untuk komunitas cybersecurity**

</div>
</div>

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🎨 **Design Modern** | Tema cosmic/nebula dengan efek partikel interaktif |
| 📱 **Full Responsive** | Optimal di mobile, tablet, dan desktop |
| ⚡ **High Performance** | Loading cepat dengan code splitting |
| 🌌 **Animasi Smooth** | Transisi dengan Framer Motion & AOS |
| 🛡️ **Security Focus** | Konten untuk cybersecurity professional |
| 📧 **Contact Form** | Form kontak dengan EmailJS integration |
| 🎯 **SEO Optimized** | Meta tags dan struktur semantic HTML |
| 🌙 **Dark Theme** | Tema gelap dengan efek neon |

## 🛠️ Teknologi Stack

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom Animations
- **Animasi:** Framer Motion + AOS (Animate On Scroll)
- **Background:** TSParticles (Cosmic Particles)
- **Icons:** React Icons
- **Form:** EmailJS
- **Deployment:** GitHub Pages / Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ & npm/yarn

### Installation
```bash
# Clone repository
git clone https://github.com/TuanmudaJannZ/jannz-portfolio.git
cd jannz-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

## 📁 Struktur Proyek

```
jannz-portfolio/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx     # Hero section
│   │   ├── About.jsx    # About section
│   │   ├── Skills.jsx   # Skills section
│   │   ├── Projects.jsx # Projects showcase
│   │   ├── Certificates.jsx # Certifications
│   │   ├── Contact.jsx  # Contact form
│   │   ├── Navbar.jsx   # Navigation
│   │   ├── Footer.jsx   # Footer
│   │   └── ParticlesBackground.jsx # Particle effects
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md
```

## 🎨 Sections

### 1. **Hero Section**
- Animasi typewriter untuk role dinamis
- Background particle cosmic
- CTA buttons: View Work & Contact

### 2. **About Section**
- Profil profesional JannZ
- Feature cards dengan icon
- Progress bars animasi

### 3. **Skills Section**
- Kategori skill (Web Dev, Security Tools, Lainnya)
- Progress bars dengan persentase
- Icons untuk setiap skill

### 4. **Projects Section**
- Grid projects dengan card
- Tags teknologi
- Link GitHub & Live Demo

### 5. **Certificates Section**
- Grid sertifikasi (desktop)
- Carousel sertifikasi (mobile)
- Pencapaian tambahan

### 6. **Contact Section**
- Form kontak dengan validasi
- Metode kontak alternatif
- Status ketersediaan

## 🔧 Konfigurasi

### Tailwind Config
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'neon-blue': '#00f3ff',
      'neon-purple': '#b967ff',
      'cosmic-dark': '#0a0a1a',
      'cosmic-darker': '#050510',
    },
    animation: {
      'gradient': 'gradient 8s linear infinite',
      'float': 'float 6s ease-in-out infinite',
    }
  }
}
```

### Vite Config
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/jannz-portfolio/', // Untuk GitHub Pages
})
```

## 📦 Deployment

### GitHub Pages
```bash
# Build project
npm run build

# Deploy to GitHub Pages
npm run deploy

# Atau manual
npx gh-pages -d dist
```

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TuanmudaJannZ/jannz-portfolio)

```bash
# Push to GitHub
git push origin main

# Import to Vercel - automatic deployment
```

### Custom Domain (portofolio.jannz.my.id)
1. Update `vite.config.js`:
   ```javascript
   base: '/'  // Remove subpath for custom domain
   ```
2. Update `package.json`:
   ```json
   "homepage": "https://portofolio.jannz.my.id"
   ```
3. Set custom domain di GitHub Pages settings
4. Add CNAME record di DNS provider

## 🎯 SEO & Performance

✅ **SEO Optimized:**
- Meta tags untuk deskripsi & keywords
- Semantic HTML structure
- Open Graph tags untuk social media

✅ **Performance Optimized:**
- Code splitting dengan React.lazy
- Optimized images
- Minified CSS & JS
- Lazy loading komponen

✅ **Accessibility:**
- ARIA labels
- Keyboard navigation
- Color contrast compliance

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | < 640px | Hamburger menu, carousel certs |
| Tablet | 640px - 1024px | Grid layouts, responsive text |
| Desktop | > 1024px | Full features, particle effects |

## 🔒 Security Features

- Sanitized form inputs
- HTTPS enforcement
- Secure API calls
- XSS protection
- CSP headers (production)

## 🔧 Customization

### Ubah Informasi Pribadi
1. **Hero Section**: `src/components/Hero.jsx`
2. **About Section**: `src/components/About.jsx`
3. **Contact Info**: `src/components/Contact.jsx`
4. **Social Links**: `src/components/Footer.jsx`

### Ubah Skills
Edit `src/components/Skills.jsx`:
```javascript
const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  // Tambah skill baru...
]
```

### Ubah Projects
Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tags: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://demo.example.com"
  }
]
```

## 🐛 Troubleshooting

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5173 already in use | `npm run dev -- --port 3000` |
| Particles not showing | Check `ParticlesBackground.jsx` config |
| AOS animations not working | Verify AOS init in `main.jsx` |
| Tailwind classes not working | Run `npx tailwindcss -i ./src/index.css -o ./src/output.css --watch` |
| Build errors | Delete `node_modules` & `package-lock.json`, then `npm install` |

### Error: Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Error: Failed to deploy
```bash
# Check gh-pages branch
git branch -a

# Force deploy
npx gh-pages -d dist -t true -f
```

## 📈 Analytics (Optional)

Tambahkan Google Analytics:
```javascript
// index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

Kontribusi dipersilakan! Ikuti langkah:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Distributed under MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Design inspiration from [EkiZR Portfolio_V5](https://eki.my.id)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Particles by [TSParticles](https://particles.js.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Kontak

**JannZ** - Cyber Security Enthusiast

- 🌐 Website: [portofolio.jannz.my.id](https://tuanmudajannz.github.io/jannz-portfolio/)
- 📧 Email: contact@jannz.my.id
- 💬 Telegram: [@TuanJannZ](https://t.me/TuanJannZ)
- 🐙 GitHub: [@TuanmudaJannZ](https://github.com/TuanmudaJannZ)
- 🛡️ LegionX: Leader

---

<div align="center">

**⭐ Jika project ini membantu, berikan star di GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/TuanmudaJannZ/jannz-portfolio?style=social)](https://github.com/TuanmudaJannZ/jannz-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TuanmudaJannZ/jannz-portfolio?style=social)](https://github.com/TuanmudaJannZ/jannz-portfolio/network/members)

**Dibuat dengan ❤️ untuk komunitas cybersecurity**

</div>- Framer Motion
- TSParticles
- AOS (Animate On Scroll)
- React Icons
