// App configuration for VPS deployment
export const config = {
  // VPS URLs - Update these with your actual VPS domain
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://your-vps-domain.com',
  imageBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL || 'https://your-vps-domain.com/images',
  
  // App settings
  appTitle: import.meta.env.VITE_APP_TITLE || 'Prompt Sync Palette',
  appDescription: import.meta.env.VITE_APP_DESCRIPTION || 'AI Prompt Gallery and Management System',
  
  // Image settings
  defaultImageFormat: 'jpg',
  maxImageSize: 5 * 1024 * 1024, // 5MB
  
  // API settings
  apiTimeout: 10000, // 10 seconds
  retryAttempts: 3,
};

// Helper function to get full image URL
export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${config.imageBaseUrl}/${imagePath}`;
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${config.apiBaseUrl}/api${endpoint}`;
};
