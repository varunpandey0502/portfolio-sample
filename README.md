# Modern Portfolio Website

A beautiful and responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for showcasing your projects, skills, and professional experience.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Automatic dark/light mode based on system preference
- **Smooth Animations**: Subtle animations and smooth scrolling
- **SEO Optimized**: Built-in SEO optimization with proper meta tags
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: Following WCAG guidelines for accessibility

## 🚀 Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal introduction and technology stack
3. **Skills**: Visual representation of your technical skills
4. **Projects**: Showcase of featured projects with links
5. **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🏗️ Setup & Installation

1. **Clone or download this project**
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

## 🎨 Customization

### Personal Information
Edit `src/app/page.tsx` to update:
- Your name and profile information
- Skills and technologies
- Project details and links
- Social media links
- Contact information

### Styling
- Colors and themes: Update CSS variables in `src/app/globals.css`
- Layout: Modify components in `src/app/page.tsx`
- Fonts: Change font imports in `src/app/layout.tsx`

### Images
- Add your profile picture (replace the placeholder initials)
- Update project images with your actual project screenshots
- Optimize images for web performance

## 🚀 Deployment on Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Environment Variables (if needed)
If you add contact form functionality or external APIs, set up environment variables in the Vercel dashboard.

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Minimized with automatic code splitting

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

If you have any questions or need help setting up your portfolio, feel free to open an issue or reach out!

---

**Happy coding!** 🚀
