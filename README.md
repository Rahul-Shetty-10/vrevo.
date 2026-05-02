# Vrevo - Digital Co-founder

A modern, responsive Next.js website for Vrevo - your digital co-founder that builds websites, apps, and social media strategies that dominate the digital space.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with custom cursor effects
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Custom cursor with trail effects
  - Scroll-based animations
  - Service popup modals
  - Hover states and micro-interactions
- **Sections**:
  - Hero section with animated text
  - Services showcase with card grid
  - How we work timeline
  - Why Vrevo comparison
  - Contact form
  - WhatsApp integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: CSS with custom properties
- **Fonts**: Space Grotesk, DM Mono
- **Animations**: Custom CSS animations with IntersectionObserver

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18.0 or higher)
- npm, yarn, pnpm, or bun

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vrevo-final.git
   cd vrevo-final
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vrevo-final/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── .gitignore               # Git ignore file
├── README.md                # This file
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Customization

### Colors
The theme uses CSS custom properties. You can modify colors in `app/globals.css`:

```css
:root {
  --black: #0A0A0A;
  --carbon: #1C1C1C;
  --red: #FF2D2D;
  --lime: #CAFF00;
  --white: #FAFAFA;
  --muted: #555;
  --border: #222;
}
```

### Fonts
The project uses Google Fonts:
- **Space Grotesk**: Headings and body text
- **DM Mono**: Code and monospace elements

### WhatsApp Integration
Update the WhatsApp number in `app/page.tsx`:
```tsx
href="https://wa.me/YOUR_PHONE_NUMBER"
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 🎯 Key Features Explained

### Custom Cursor
- Circular lime green cursor that follows mouse movement
- Trail effect creates continuous smear as cursor moves
- Changes to red when hovering over interactive elements

### Service Cards
- 3-column grid on desktop
- 2-column on tablet
- 1-column on mobile
- Click to open detailed popup modals

### Timeline Animation
- Sequential reveal of process steps
- Sticky header on desktop
- Responsive layout on mobile

### Comparison Table
- Vrevo vs Freelancer vs Agency comparison
- Optimized for all screen sizes
- Horizontal scroll on smaller devices

## 🚀 Build & Deploy

### Build for production
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start production server
```bash
npm run start
# or
yarn start
# or
pnpm start
```

### Export static files
```bash
npm run build
npm run export
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Website**: [vrevo.co](https://vrevo.co)
- **Email**: hello@vrevo.co
- **WhatsApp**: Click the WhatsApp button on the website
- **Location**: Bangalore, Karnataka, India

---

Built with ❤️ by [Vrevo](https://vrevo.co) - Your Digital Co-founder
