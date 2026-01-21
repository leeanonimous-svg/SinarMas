# Sinar Mas Agribusiness - Deployment Guide

## Production-Ready HTML/CSS Site

This folder contains the production-ready version of the Sinar Mas Agribusiness website.

### File Structure
```
/public
├── index.html          # Main HTML file
├── /css
│   └── style.css      # Custom CSS styles
├── /js
│   └── main.js        # Minimal JavaScript for smooth scrolling
└── README.md          # This file
```

### Deployment Instructions for Hostinger

1. **Upload all files** from the `/public` folder to your Hostinger hosting:
   - Upload `index.html` to the root directory (or public_html)
   - Upload the `css` folder with `style.css` inside
   - Upload the `js` folder with `main.js` inside

2. **File permissions**: Ensure all files have proper read permissions (644 for files, 755 for folders)

3. **Access your site**: Navigate to your domain URL to see the live site

### Technical Details

- **No build process required** - Pure HTML/CSS with Tailwind CDN
- **Fonts**: Google Fonts (Bebas Neue + Inter)
- **Responsive**: Mobile-first design
- **SEO optimized**: Semantic HTML, meta tags, proper heading hierarchy
- **Accessibility**: ARIA labels, keyboard navigation, focus states
- **Performance**: Minimal JavaScript, optimized loading

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Features

✅ Fixed navigation header with smooth scrolling
✅ Hero section with background image
✅ About section with timeline
✅ Business areas showcase
✅ Product grid
✅ Impact statistics
✅ Sustainability initiatives
✅ Footer with contact information

### Customization

To update content:
1. Edit `index.html` for text content, images, and structure
2. Edit `css/style.css` for custom styling
3. Colors are defined in the Tailwind config in `index.html`:
   - Primary green: #C4D82E
   - Dark green: #8BA91F

### Support

For any issues, ensure:
- All files are uploaded correctly
- File paths are correct (css/style.css, js/main.js)
- All external resources (fonts, images) are accessible
