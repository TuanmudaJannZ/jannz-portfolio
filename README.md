# 🚀 JannZ Portfolio - Cyber Security Specialist

![Portfolio Preview](https://img.shields.io/badge/Portfolio-JannZ-blue)
![React](https://img.shields.io/badge/React-18.2-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-06B6D4)
![Vite](https://img.shields.io/badge/Vite-4.4-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

<div align="center">

<!-- Ganti dengan screenshot aktual website Anda -->
<img src="https://via.placeholder.com/800x450/0a0a1a/00f3ff?text=JannZ+Portfolio+Preview" alt="Portfolio Preview" width="800"/>

**Modern Cosmic Portfolio for Cyber Security Professional**

[🌐 Live Website](https://tuanmudajannz.github.io/jannz-portfolio/) • [📦 GitHub](https://github.com/TuanmudaJannZ/jannz-portfolio) • [🐛 Issues](https://github.com/TuanmudaJannZ/jannz-portfolio/issues) • [💡 Features](#-features)

</div>

## 📖 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Sections Overview](#-sections-overview)
- [⚙️ Configuration](#️-configuration)
- [📦 Deployment](#-deployment)
- [🔧 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🔒 Security](#-security)
- [🐛 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

## ✨ Features

### 🎨 Visual Excellence
- **Cosmic Nebula Theme** - Dark theme dengan efek partikel bintang
- **Interactive Particles** - Background dinamis dengan TSParticles
- **Smooth Animations** - Framer Motion & AOS scroll animations
- **Neon Glow Effects** - Custom glow untuk elemen penting

### ⚡ Performance
- **Fast Loading** - Optimized dengan Vite + Code splitting
- **SEO Optimized** - Meta tags & semantic HTML
- **Mobile First** - Responsive di semua device
- **Accessibility** - ARIA labels & keyboard navigation

### 🔧 Functionality
- **Contact Form** - Integrated dengan EmailJS
- **Dynamic Skills** - Animated progress bars
- **Projects Showcase** - Filterable project cards
- **Certificates Carousel** - Mobile-friendly display

## 🛠️ Tech Stack

**Frontend Framework**
- ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

**Styling & UI**
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)

**Libraries**
- ![TSParticles](https://img.shields.io/badge/TSParticles-000000?style=flat&logo=particle&logoColor=white)
- ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat&logo=react&logoColor=white)
- ![AOS](https://img.shields.io/badge/AOS-000000?style=flat&logo=aos&logoColor=white)

**Deployment**
- ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github&logoColor=white)

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/TuanmudaJannZ/jannz-portfolio.git

# Navigate to project
cd jannz-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
# Build project
npm run build

# Preview build
npm run preview
```

## 📁 Project Structure
```
jannz-portfolio/
├── public/                    # Static assets
│   ├── index.html            # Main HTML
│   └── vite.svg              # Vite logo
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills section
│   │   ├── Projects.jsx      # Projects showcase
│   │   ├── Certificates.jsx  # Certifications
│   │   ├── Contact.jsx       # Contact form
│   │   ├── Navbar.jsx        # Navigation
│   │   ├── Footer.jsx        # Footer
│   │   └── ParticlesBackground.jsx # Particle effects
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .gitignore                # Git ignore file
├── index.html                # Entry HTML
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind config
├── vite.config.js            # Vite config
└── README.md                 # This file
```

## 🎨 Sections Overview

### 1. Hero Section
- Animated typewriter effect for roles
- Cosmic particle background
- Call-to-action buttons
- Scroll indicator

### 2. About Section
- Professional introduction
- Feature cards with icons
- Animated progress bars
- Personal achievements

### 3. Skills Section
- Categorized skills (Web Dev, Security, Tools)
- Interactive progress bars
- Technology icons
- Continuous learning section

### 4. Projects Section
- Project cards grid
- Technology tags
- GitHub & Live demo links
- Hover effects

### 5. Certificates Section
- Certifications grid (desktop)
- Interactive carousel (mobile)
- Achievement metrics
- Certification details

### 6. Contact Section
- Working contact form
- Multiple contact methods
- Availability status
- Form validation

## ⚙️ Configuration

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#b967ff',
        'cosmic-dark': '#0a0a1a',
        'cosmic-darker': '#050510',
        'cosmic-light': '#1a1a2e',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      }
    }
  }
}
```

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jannz-portfolio/', // For GitHub Pages
})
```

## 📦 Deployment

### GitHub Pages (Current)
```bash
# Build and deploy
npm run deploy

# Manual deployment
npm run build
npx gh-pages -d dist
```

**Live at:** https://tuanmudajannz.github.io/jannz-portfolio/

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TuanmudaJannZ/jannz-portfolio)

1. Push code to GitHub
2. Import repository on Vercel
3. Automatic deployment on push

### Custom Domain Setup
For `portofolio.jannz.my.id`:

1. Update configuration:
```javascript
// vite.config.js
base: '/'
```
```json
// package.json
"homepage": "https://portofolio.jannz.my.id"
```

2. GitHub Settings → Pages:
   - Custom domain: `portofolio.jannz.my.id`
   - Enforce HTTPS

3. DNS Configuration:
```
Type: CNAME
Name: portofolio
Value: tuanmudajannz.github.io
TTL: 300
```

## 🔧 Customization

### Personal Information
Edit these files to update your info:

| File | Information |
|------|-------------|
| `src/components/Hero.jsx` | Name, roles, description |
| `src/components/About.jsx` | About me text, features |
| `src/components/Contact.jsx` | Contact details |
| `src/components/Footer.jsx` | Social links |

### Skills Update
```javascript
// src/components/Skills.jsx
const skills = [
  {
    category: "Security Tools",
    skills: [
      { name: "Kali Linux", icon: <SiKaliLinux />, level: 90 },
      { name: "Burp Suite", icon: <SiBurpsuite />, level: 85 },
      // Add more skills...
    ]
  }
]
```

### Projects Update
```javascript
// src/components/Projects.jsx
const projects = [
  {
    title: "Your Project",
    description: "Project description here",
    tags: ["React", "Node.js", "Security"],
    github: "https://github.com/yourusername/project",
    live: "https://demo.example.com"
  }
]
```

## 📱 Responsive Design

| Device | Breakpoints | Features |
|--------|-------------|----------|
| 📱 Mobile | < 640px | Hamburger menu, carousel, mobile-optimized layout |
| 📟 Tablet | 640px - 1024px | Adaptive grid, responsive typography |
| 🖥️ Desktop | > 1024px | Full features, particle effects, hover states |

## 🔒 Security Features

- **Form Validation** - Client-side validation
- **Input Sanitization** - Prevent XSS attacks
- **HTTPS Enforcement** - Secure connections
- **CSP Headers** - Content Security Policy
- **Secure Dependencies** - Regular updates

## 🐛 Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| Port 5173 in use | `npm run dev -- --port 3000` |
| Particles not showing | Check browser console for errors |
| Animations not working | Verify AOS initialization |
| Tailwind classes missing | Restart dev server |
| Build errors | Clear cache: `rm -rf node_modules package-lock.json && npm install` |

### EmailJS Configuration
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Get your credentials:
   - Service ID
   - Template ID  
   - Public Key
3. Update in `src/components/Contact.jsx`

### GitHub Pages Not Updating
```bash
# Force update
rm -rf dist
npm run build
npx gh-pages -d dist -t true -f

# Check deployment
git branch -a  # Should see gh-pages branch
```

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Use meaningful commit messages
- Follow existing code style
- Test changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 JannZ

Permission is hereby granted, free of charge...
```

## 🙏 Acknowledgments

- Design inspiration from [EkiZR Portfolio_V5](https://eki.my.id)
- Icons provided by [React Icons](https://react-icons.github.io/)
- Particle effects by [TSParticles](https://particles.js.org/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Contact

**JannZ** - Cyber Security Enthusiast

- 🌐 Portfolio: [portofolio.jannz.my.id](https://tuanmudajannz.github.io/jannz-portfolio/)
- 📧 Email: [contact@jannz.my.id](mailto:contact@jannz.my.id)
- 💬 Telegram: [@TuanJannZ](https://t.me/TuanJannZ)
- 🐙 GitHub: [@TuanmudaJannZ](https://github.com/TuanmudaJannZ)
- 🛡️ LegionX: Team Leader

---

<div align="center">

### ⭐ Support the Project

If this portfolio helps you, give it a star!

[![GitHub stars](https://img.shields.io/github/stars/TuanmudaJannZ/jannz-portfolio?style=for-the-badge)](https://github.com/TuanmudaJannZ/jannz-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/TuanmudaJannZ/jannz-portfolio?style=for-the-badge)](https://github.com/TuanmudaJannZ/jannz-portfolio/network/members)

**Built with ❤️ for the cybersecurity community**

</div>

## 📊 Project Stats

![GitHub Repo Stars](https://img.shields.io/github/stars/TuanmudaJannZ/jannz-portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/TuanmudaJannZ/jannz-portfolio?style=social)
![GitHub Issues](https://img.shields.io/github/issues/TuanmudaJannZ/jannz-portfolio)
![GitHub Last Commit](https://img.shields.io/github/last-commit/TuanmudaJannZ/jannz-portfolio)

---

**📌 Note:** This README is automatically generated and maintained. For any issues or suggestions, please open an issue in the repository.
