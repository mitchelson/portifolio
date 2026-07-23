# Favicon and Icon Assets

This directory contains favicon and app icons for the portfolio.

## Current Icons

- `favicon.svg` - SVG favicon (scalable)
- Generated PNG icons needed:
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png` (180x180)
  - `android-chrome-192x192.png`
  - `android-chrome-512x512.png`

## How to Generate PNG Icons

You can use online tools or CLI tools to generate PNG favicons from the SVG:

### Option 1: Using favicon.io
1. Visit https://favicon.io/favicon-converter/
2. Upload the `favicon.svg`
3. Download the generated package

### Option 2: Using ImageMagick (CLI)
```bash
# Install ImageMagick if not already installed
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick

# Generate icons
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png
convert favicon.svg -resize 192x192 android-chrome-192x192.png
convert favicon.svg -resize 512x512 android-chrome-512x512.png
```

## Social Media Image

For optimal social media sharing, create an Open Graph image:
- File: `og-image.jpg`
- Size: 1200x630 pixels
- Format: JPG or PNG
- Location: `/public/og-image.jpg`

The image should include:
- Your name and title
- Professional photo or branding
- Key information about your expertise
