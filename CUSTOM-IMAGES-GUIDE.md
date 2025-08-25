# 🖼️ Custom Images Guide for Pandora's Box

## 🚀 Quick Start: Using PostImage

### Step 1: Upload Your Image
1. Go to **[postimg.cc](https://postimg.cc)**
2. Upload your image (drag & drop or browse)
3. Copy the **direct link** (starts with `https://i.postimg.cc/`)

### Step 2: Use in Your Components
```tsx
import Image from 'next/image'

// Method 1: Next.js Image Component (Recommended)
<Image
  src="https://i.postimg.cc/YOUR-CODE/image.jpg"
  alt="Description"
  width={400}
  height={300}
  className="w-full h-auto"
/>

// Method 2: Background Image
<div 
  className="h-64 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://i.postimg.cc/YOUR-CODE/background.jpg')"
  }}
>
  Content here...
</div>
```

## 🎨 Common Use Cases

### 1. Replace Hero Background
```tsx
// In components/Hero.tsx, replace the background class:
className="relative min-h-screen bg-cover bg-center bg-no-repeat"
style={{
  backgroundImage: "url('https://i.postimg.cc/YOUR-CODE/hero-bg.jpg')"
}}
```

### 2. Add Custom Logo
```tsx
// Replace text logo with image:
<Image
  src="https://i.postimg.cc/YOUR-CODE/logo.png"
  alt="Pandora's Box Logo"
  width={150}
  height={50}
  className="h-auto"
/>
```

### 3. Team Member Photos
```tsx
// In components/Team.tsx:
<Image
  src="https://i.postimg.cc/YOUR-CODE/team-member-1.jpg"
  alt="Team Member"
  width={150}
  height={150}
  className="w-full h-full object-cover rounded-full"
/>
```

### 4. Product Images
```tsx
// In components/Gears.tsx:
<Image
  src="https://i.postimg.cc/YOUR-CODE/gaming-headset.jpg"
  alt="Gaming Headset"
  width={300}
  height={200}
  className="w-full h-auto object-cover"
/>
```

## 🏠 Alternative: Local Images

### Method 1: Public Folder
1. Create `public/images/` folder
2. Add your images: `public/images/hero-bg.jpg`
3. Use: `src="/images/hero-bg.jpg"`

### Method 2: Assets Folder (Advanced)
1. Create `assets/images/` folder
2. Import: `import heroImage from '@/assets/images/hero-bg.jpg'`
3. Use: `src={heroImage}`

## ⚡ Performance Tips

### 1. Use Next.js Image Component
```tsx
// ✅ Good - Optimized, lazy loading
<Image src="..." alt="..." width={400} height={300} />

// ❌ Avoid - No optimization
<img src="..." alt="" />
```

### 2. Set Proper Dimensions
```tsx
// Always provide width and height
<Image
  src="..."
  alt="..."
  width={400}    // Actual image width
  height={300}   // Actual image height
  className="w-full h-auto"  // Responsive styling
/>
```

### 3. Use Priority for Above-Fold Images
```tsx
<Image
  src="..."
  alt="..."
  width={400}
  height={300}
  priority  // Loads immediately, not lazy
/>
```

## 🔧 Configuration

### Add New Image Domains
In `next.config.js`:
```javascript
const nextConfig = {
  images: {
    domains: [
      'i.postimg.cc',
      'imgur.com',
      'your-domain.com',
    ],
  },
}
```

## 🎨 Styling Examples

### Responsive Image
```tsx
<Image
  src="..."
  alt="..."
  width={800}
  height={400}
  className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
/>
```

### Hover Effects
```tsx
<div className="group cursor-pointer">
  <Image
    src="..."
    alt="..."
    width={300}
    height={200}
    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
  />
</div>
```

### Gradient Overlay
```tsx
<div className="relative">
  <Image
    src="..."
    alt="..."
    width={400}
    height={300}
    className="w-full h-auto"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  <div className="absolute bottom-4 left-4 text-white">
    <h3>Content over image</h3>
  </div>
</div>
```

## 🚀 Ready to Use!

1. Upload images to PostImage
2. Copy direct links  
3. Replace URLs in components
4. Test locally: `npm run dev`
5. Build & deploy: `npm run build`

Your custom images will be optimized and responsive! 🎮✨
