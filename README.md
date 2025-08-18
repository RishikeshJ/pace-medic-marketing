# PaceMedic Marketing Deck

A modern, interactive marketing presentation deck for PaceMedic's telehealth platform, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Interactive Slides**: Smooth transitions between presentation slides
- **Dark/Light Mode**: Toggle between themes for different presentation environments
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Modern UI**: Clean, professional design with custom theming
- **Keyboard Navigation**: Arrow keys and spacebar for slide navigation
- **Touch Support**: Swipe gestures for mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom OKLCH color theme
- **Animations**: Framer Motion
- **UI Components**: Custom shadcn/ui components
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pace-medic-marketing
   ```

2. **Install dependencies**
   ```bash
   cd pacemedic-deck
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Navigation
- **Arrow Keys**: Navigate between slides
- **Spacebar**: Next slide
- **Mouse Wheel**: Scroll through slides
- **Navigation Dots**: Click to jump to specific slides
- **Navigation Arrows**: Click for manual navigation

### Theme Toggle
- Click the sun/moon icon in the top-right corner to switch between light and dark modes

## 📋 Presentation Structure

1. **Executive Summary** - Overview of PaceMedic platform
2. **Why Choose PaceMedic** - Key differentiators and benefits
3. **Key Features & Benefits** - Comprehensive platform capabilities
4. **Business Impact** - Measurable benefits for institutions
5. **Call to Action** - Next steps and contact information

## 🎨 Customization

### Theme Colors
The project uses a custom OKLCH color theme defined in `src/app/globals.css`. You can modify the color variables to match your brand:

```css
:root {
  --primary: oklch(0.4341 0.0392 41.9938);
  --secondary: oklch(0.9200 0.0651 74.3695);
  /* ... other color variables */
}
```

### Content Updates
Edit the `slides` array in `src/app/page.tsx` to modify presentation content, add new slides, or update existing ones.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for PaceMedic. All rights reserved.

## 📞 Contact

- **Website**: [https://pacemedic.com](https://pacemedic.com)
- **Email**: contact@pacemedic.com

---

Built with ❤️ for PaceMedic's healthcare transformation mission. 