# AI Prompt Gallery

A beautiful, modern web application for discovering and copying AI prompts for image generation. Built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Beautiful Gallery Interface** - Clean, modern design with responsive card layout
- **Category Filtering** - Browse prompts by Men, Women, Couple, Kids, Animals, Nature, and Art
- **One-Click Copy** - Instantly copy any prompt to clipboard
- **Real-time Updates** - Live update indicator (ready for backend integration)
- **Mobile Responsive** - Perfect viewing experience on all devices
- **Admin Panel Demo** - Basic admin interface structure

## 🚀 Live Demo

Visit the gallery at: `/`  
Admin panel at: `/admin` (demo: admin/admin)

## 📁 Project Structure

```
src/
  components/
    ui/                 # Shadcn UI components
    PromptCard.tsx      # Individual prompt display card
    CategoryFilter.tsx  # Category filtering buttons
    GalleryHeader.tsx   # Main header with logo and stats
    PromptGallery.tsx   # Main gallery component
  data/
    samplePrompts.ts    # Sample data (11 prompts with images)
  pages/
    Index.tsx           # Main gallery page
    Admin.tsx           # Admin panel (demo)
  assets/
    sample-images/      # Generated sample images
```

## 🎨 Design System

- **Primary Color**: Blue (#4F7CFF) - Matches the reference design
- **Typography**: Clean, modern typography with proper hierarchy
- **Layout**: Card-based responsive grid with consistent spacing
- **Animations**: Smooth transitions and hover effects

## 🛠 Current Implementation

This is a **frontend-only** implementation with:

- ✅ 11 sample AI prompts with generated images
- ✅ Category filtering (All, Men, Women, Couple, Kids, Animals, Nature, Art)
- ✅ Copy to clipboard functionality
- ✅ Responsive design
- ✅ Modern UI with proper loading states
- ✅ Admin panel structure (demo)

## ⚠️ Backend Requirements

To make this a **production-ready** application as requested, you'll need:

### Database Schema
```sql
CREATE TABLE prompts (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR(500) NOT NULL,
  prompt_text TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Required API Endpoints
- `GET /api/prompts` - Fetch all prompts
- `POST /api/prompts` - Add new prompt (admin only)
- `PUT /api/prompts/:id` - Update prompt (admin only)
- `DELETE /api/prompts/:id` - Delete prompt (admin only)

### Infrastructure Needed
1. **Database**: PostgreSQL (Heroku) or SQLite (VPS)
2. **Authentication**: JWT or session-based for admin
3. **Real-time Updates**: WebSockets or Server-Sent Events
4. **File Storage**: For image uploads
5. **API Server**: Node.js/Express, Python/Flask, or similar

### Environment Variables
```bash
DATABASE_URL=your_database_url
ADMIN_USER=admin_username
ADMIN_PASS=admin_password
JWT_SECRET=your_jwt_secret
```

## 🚀 Quick Setup (Frontend Only)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🔧 Recommended Backend Solutions

### Option 1: Supabase (Recommended)
- Instant PostgreSQL database
- Built-in authentication
- Real-time subscriptions
- File storage
- Auto-generated APIs

### Option 2: Custom Backend
- Node.js + Express + PostgreSQL
- Python + Flask/FastAPI + PostgreSQL
- WebSocket integration for real-time updates

## 📱 Mobile Responsive

The gallery is fully responsive and works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Future Enhancements

- [ ] Backend integration
- [ ] User authentication
- [ ] Prompt favorites/bookmarks
- [ ] Search functionality
- [ ] Prompt rating system
- [ ] Image upload for custom prompts
- [ ] Export/share functionality
- [ ] Advanced filtering options

## 🤝 Contributing

This frontend is ready for backend integration. The component structure makes it easy to:

1. Replace sample data with API calls
2. Add authentication context
3. Implement real-time updates
4. Add form validation and error handling

## 📄 License

MIT License - feel free to use this code for your projects.

---

**Note**: This is currently a frontend demo. For full production deployment with database persistence, real-time updates, and admin functionality, backend integration is required.