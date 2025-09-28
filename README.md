# Prompt Sync Palette

A modern, white-themed AI prompt gallery and management system optimized for VPS deployment.

## ✨ Features

- **Clean White Theme**: Professional, business-ready design
- **VPS Ready**: Optimized for deployment on your VPS
- **Image Management**: Dynamic image URL handling
- **Category Filtering**: Browse prompts by categories (Men, Women, Couple, Kids, Animals, Nature, Art)
- **One-Click Copy**: Instantly copy AI prompts to clipboard
- **Responsive Design**: Works perfectly on desktop and mobile
- **Production Optimized**: Minified builds with code splitting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prompt-sync-palette.git
cd prompt-sync-palette

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build for production
npm run build:prod

# Preview production build
npm run preview:prod
```

## 🌐 VPS Deployment

### Quick Deployment

1. **Update Configuration**: Edit `src/config/app.ts` with your VPS domain
2. **Build**: Run `npm run build:prod`
3. **Upload**: Upload `dist` folder contents to your VPS
4. **Images**: Create `/images` directory and upload your images
5. **Configure**: Set up your web server (see DEPLOYMENT.md)

### Using Deployment Scripts

**Windows:**
```bash
deploy.bat
```

**Linux/Mac:**
```bash
chmod +x deploy.sh
./deploy.sh
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## ⚙️ Configuration

### Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=https://your-domain.com
VITE_IMAGE_BASE_URL=https://your-domain.com/images
VITE_APP_TITLE=Prompt Sync Palette
VITE_APP_DESCRIPTION=AI Prompt Gallery and Management System
```

### Image Setup

Place your images in the `/images` directory on your VPS:
- business-portrait.jpg
- woman-professional.jpg
- couple-urban.jpg
- kids-playing.jpg
- cute-cat.jpg
- landscape-sunset.jpg
- abstract-art.jpg
- fashion-portrait.jpg
- golden-retriever.jpg
- romantic-couple.jpg
- family-home.jpg

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── PromptCard.tsx  # Individual prompt card
│   ├── PromptGallery.tsx # Main gallery component
│   └── ...
├── config/             # App configuration
│   └── app.ts         # VPS and environment config
├── data/              # Sample data
│   └── samplePrompts.ts # Prompt data with VPS URLs
├── pages/             # Page components
└── ...
```

## 🎨 Customization

### Theme Colors

Edit `src/index.css` to customize colors:

```css
:root {
  --background: 255 255 255;  /* Pure white */
  --primary: 59 130 246;      /* Blue */
  --foreground: 15 23 42;     /* Dark text */
}
```

### Adding New Prompts

Edit `src/data/samplePrompts.ts`:

```typescript
{
  id: "12",
  imageUrl: getImageUrl("your-image.jpg"),
  promptText: "Your AI prompt text here...",
  category: "Your Category",
  createdAt: new Date().toISOString()
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build with production optimizations
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- 📖 Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- 🐛 Report issues on GitHub
- 💬 Ask questions in discussions

---

**Made with ❤️ for AI prompt enthusiasts**