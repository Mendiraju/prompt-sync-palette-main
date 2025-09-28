# VPS Deployment Guide

This guide will help you deploy the Prompt Sync Palette to your VPS.

## Prerequisites

- VPS with Node.js 18+ installed
- Nginx or Apache web server
- Domain name pointing to your VPS
- SSL certificate (Let's Encrypt recommended)

## Step 1: Build the Application

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

## Step 2: Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-domain.com
VITE_IMAGE_BASE_URL=https://your-domain.com/images
VITE_APP_TITLE=Prompt Sync Palette
VITE_APP_DESCRIPTION=AI Prompt Gallery and Management System
```

## Step 3: Upload Files to VPS

Upload the `dist` folder contents to your web server directory (e.g., `/var/www/html/` or `/var/www/your-domain/`).

## Step 4: Configure Web Server

### Nginx Configuration

Create a configuration file at `/etc/nginx/sites-available/your-domain`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    root /var/www/your-domain;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/your-domain /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Apache Configuration

Create a `.htaccess` file in your web directory:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

## Step 5: Set Up Image Directory

Create an images directory on your VPS:

```bash
sudo mkdir -p /var/www/your-domain/images
sudo chown -R www-data:www-data /var/www/your-domain/images
sudo chmod -R 755 /var/www/your-domain/images
```

Upload your images to this directory. The application expects these files:
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

## Step 6: SSL Certificate (Recommended)

Install Let's Encrypt SSL certificate:

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Step 7: Update Configuration

Update the configuration in `src/config/app.ts` to use your actual domain:

```typescript
export const config = {
  apiBaseUrl: 'https://your-domain.com',
  imageBaseUrl: 'https://your-domain.com/images',
  // ... rest of config
};
```

## Step 8: Test Deployment

1. Visit your domain in a browser
2. Check that images load correctly
3. Test the copy functionality
4. Verify responsive design on mobile devices

## Troubleshooting

### Images Not Loading
- Check file permissions: `sudo chmod 644 /var/www/your-domain/images/*`
- Verify image URLs in browser developer tools
- Check web server error logs

### 404 Errors on Refresh
- Ensure your web server is configured for client-side routing
- Check that `try_files` directive is properly set

### Performance Issues
- Enable gzip compression in your web server
- Check that static assets are being cached
- Consider using a CDN for images

## Maintenance

- Regularly update dependencies: `npm update`
- Monitor server resources and logs
- Backup your configuration and uploaded images
- Keep SSL certificates renewed (usually automatic with certbot)

## Security Considerations

- Keep your server and dependencies updated
- Use strong passwords and SSH keys
- Configure firewall rules
- Regular security audits
- Monitor access logs for suspicious activity
