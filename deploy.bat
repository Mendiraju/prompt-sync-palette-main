@echo off
echo 🚀 Prompt Sync Palette - VPS Deployment Script
echo ==============================================

REM Check if .env file exists
if not exist .env (
    echo ⚠️  .env file not found. Creating from template...
    (
        echo VITE_API_BASE_URL=https://your-domain.com
        echo VITE_IMAGE_BASE_URL=https://your-domain.com/images
        echo VITE_APP_TITLE=Prompt Sync Palette
        echo VITE_APP_DESCRIPTION=AI Prompt Gallery and Management System
    ) > .env
    echo 📝 Please edit .env file with your actual domain before building!
    echo    Current values:
    type .env
    echo.
    pause
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build for production
echo 🔨 Building for production...
call npm run build:prod

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 📁 Build files are in the 'dist' directory
    echo 📋 Next steps:
    echo    1. Upload the contents of 'dist' folder to your VPS
    echo    2. Create an 'images' directory on your VPS
    echo    3. Upload your images to the images directory
    echo    4. Configure your web server (Nginx/Apache)
    echo    5. Set up SSL certificate
    echo.
    echo 📖 See DEPLOYMENT.md for detailed instructions
    echo.
    echo 🌐 To preview locally: npm run preview:prod
) else (
    echo ❌ Build failed! Please check the errors above.
    exit /b 1
)

pause
