
# 🚀 Ritesh's Portfolio Website

A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and provides a platform for potential collaborators and employers to learn more about my work.

![Portfolio Preview](./public/image/preview.png)

## ✨ Features

- **Modern Design**: Clean and professional UI/UX design
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Theme switching capability
- **Interactive Components**: Smooth animations and transitions
- **Fast Loading**: Optimized with Next.js 13 App Router
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessible**: WCAG compliant with proper semantic HTML
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Interactive project cards with live demos and source code links

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Material Tailwind React](https://www.material-tailwind.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployment**: [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/)
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13 App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Main portfolio page
│   ├── globals.css        # Global styles
│   ├── hero.tsx           # Hero section
│   ├── skills.tsx         # Skills showcase
│   ├── projects.tsx       # Projects portfolio
│   ├── resume.tsx         # Experience timeline
│   ├── education.tsx      # Education section
│   ├── testimonial.tsx    # Client testimonials
│   └── contact-form.tsx   # Contact form
├── components/            # Reusable components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   ├── project-card.tsx   # Project card component
│   ├── skill-card.tsx     # Skill card component
│   ├── resume-item.tsx    # Resume timeline item
│   └── typewriter.tsx     # Typewriter effect component
└── utils/                 # Utility functions
    └── utils.ts           # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ratinto/Ritesh-pflio.git
   cd Ritesh-pflio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `src/app/hero.tsx` - Hero section content
- `src/app/resume.tsx` - Work experience
- `src/app/education.tsx` - Educational background
- `src/components/navbar.tsx` - Navigation items

### Projects
Add your projects in `src/app/projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "/path/to/image.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/username/repository"
  }
];
```

### Skills
Modify your skills in `src/app/skills.tsx`:
```typescript
const skills = [
  {
    name: "Skill Name",
    level: 90, // Percentage
    category: "Frontend" // or Backend, Tools, etc.
  }
];
```

### Styling
- Colors and themes: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component-specific styles: Individual component files

## 📱 Sections

1. **Hero Section**: Introduction and call-to-action
2. **Skills**: Technical skills with proficiency levels
3. **Projects**: Portfolio of completed projects
4. **Experience**: Professional work timeline
5. **Education**: Academic background
6. **Testimonials**: Client and colleague testimonials
7. **Contact**: Contact form and social links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy automatically on every push

### GitHub Pages
```bash
npm run deploy
```

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

**Ritesh Kumar**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@ratinto](https://github.com/ratinto)
- Email: [Your Email]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Material Tailwind](https://www.material-tailwind.com/) for beautiful components
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Ritesh Kumar](https://github.com/ratinto)
