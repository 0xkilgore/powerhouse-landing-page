# Powerhouse Landing Page

A modern, responsive landing page for Powerhouse - showcasing the future of open-source organizations through Scalable Network Organizations (SNOs).

## Features

- **Modern Design**: Built with React, TypeScript, and TailwindCSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Smooth animations and hover effects
- **SNO Visualization**: Custom SVG chart component for Scalable Network Organizations
- **Hero Animation**: Animated globe background with energy connections
- **Gradient Accents**: Beautiful fuchsia-to-cyan gradients throughout

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS v3
- **Build Tool**: Vite
- **Fonts**: Space Grotesk (Google Fonts)
- **Animations**: Framer Motion + Custom SVG animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0xkilgore/powerhouse-landing-page.git
cd powerhouse-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
powerhouse-landing-page/
├── src/
│   ├── components/
│   │   ├── PowerhouseHeroGlobe.tsx    # Animated hero background
│   │   └── PowerhouseSNOChart.tsx     # SNO visualization chart
│   ├── PowerhouseLanding.tsx          # Main landing page component
│   ├── App.tsx                        # App entry point
│   └── index.css                      # Global styles
├── images/                            # Powerhouse branding assets
├── public/                            # Static assets
└── tailwind.config.js                 # TailwindCSS configuration
```

## Key Components

### PowerhouseSNOChart
A custom SVG component that visualizes the Scalable Network Organization architecture:
- **DAO Center**: The on-chain brain & treasury
- **Operational Hub**: Global, liability-free payroll
- **Revenue Hub**: Sells services & shares proceeds  
- **Collateral Fund**: Routes capital to winning work
- **IP Guard**: Protects brand while obeying votes

### PowerhouseHeroGlobe
An animated background component featuring a connected globe with moving energy elements.

## Customization

### Colors
The project uses a consistent color scheme with fuchsia-to-cyan gradients. You can customize these in:
- `tailwind.config.js` for TailwindCSS utilities
- Individual component files for specific styling

### Fonts
Currently uses Space Grotesk as the primary font. To change fonts:
1. Update the Google Fonts link in `index.html`
2. Modify `tailwind.config.js` font family settings
3. Update any hardcoded font references

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3 + CloudFront**: For enterprise deployments

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary to Powerhouse. All rights reserved.

## Contact

For questions or support, contact the Powerhouse team.

---

Built with ❤️ by the Powerhouse team
