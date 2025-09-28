#!/bin/bash

# Prompt Sync Palette - VPS Deployment Script
# This script helps deploy the application to your VPS

echo "🚀 Prompt Sync Palette - VPS Deployment Script"
echo "=============================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from template..."
    cat > .env << EOF
VITE_API_BASE_URL=https://your-domain.com
VITE_IMAGE_BASE_URL=https://your-domain.com/images
VITE_APP_TITLE=Prompt Sync Palette
VITE_APP_DESCRIPTION=AI Prompt Gallery and Management System
EOF
    echo "📝 Please edit .env file with your actual domain before building!"
    echo "   Current values:"
    cat .env
    echo ""
    read -p "Press Enter to continue after updating .env file..."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build:prod

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build files are in the 'dist' directory"
    echo "📋 Next steps:"
    echo "   1. Upload the contents of 'dist' folder to your VPS"
    echo "   2. Create an 'images' directory on your VPS"
    echo "   3. Upload your images to the images directory"
    echo "   4. Configure your web server (Nginx/Apache)"
    echo "   5. Set up SSL certificate"
    echo ""
    echo "📖 See DEPLOYMENT.md for detailed instructions"
    echo ""
    echo "🌐 To preview locally: npm run preview:prod"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
