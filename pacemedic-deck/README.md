# PaceMedic Marketing Deck

A modern, interactive marketing presentation built with Next.js, ShadCN UI, and Framer Motion.

## Features

- 🎯 **Interactive Slides**: Smooth transitions between presentation sections
- ⌨️ **Keyboard Navigation**: Use arrow keys to navigate between slides
- 🖱️ **Mouse/Scroll Navigation**: Scroll or click navigation dots to move between slides
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI**: Beautiful design with ShadCN components and Tailwind CSS
- ✨ **Smooth Animations**: Framer Motion powered transitions

## Navigation

- **Arrow Keys**: Use ↑/↓ or ←/→ to navigate between slides
- **Spacebar**: Press space to go to next slide
- **Mouse Wheel**: Scroll up/down to navigate
- **Navigation Dots**: Click the dots on the right to jump to specific slides
- **Arrow Buttons**: Use the arrow buttons on the left side

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd pacemedic-deck
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Project Structure

```
pacemedic-deck/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main marketing deck component
│   └── components/
│       └── ui/                  # ShadCN UI components
├── public/                      # Static assets
└── package.json                 # Dependencies and scripts
```

## Slides Overview

1. **Executive Summary** - Introduction to PaceMedic platform
2. **Why Choose PaceMedic** - Key value propositions
3. **Key Features & Benefits** - Detailed feature breakdown
4. **Business Impact** - ROI and measurable results
5. **Call to Action** - Contact information and next steps

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

## Customization

### Adding New Slides

To add a new slide, edit `src/app/page.tsx` and add a new object to the `slides` array:

```typescript
{
  id: 'new-slide',
  title: 'New Slide Title',
  icon: SomeIcon,
  content: (
    <div>
      {/* Your slide content */}
    </div>
  )
}
```

### Styling

- Global styles are in `src/app/globals.css`
- Component styles use Tailwind CSS classes
- Custom animations are defined in the CSS file

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized for fast loading
- Lazy loading of components
- Efficient animations
- Responsive images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for PaceMedic marketing purposes.

---

**Ready to present?** Start the development server and navigate through the slides using arrow keys or scroll!
