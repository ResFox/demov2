/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.postimg.cc',           // PostImage
      'imgur.com',              // Imgur  
      'i.imgur.com',            // Imgur CDN
      'images.unsplash.com',    // Unsplash
      'cdn.pixabay.com',        // Pixabay
      'your-custom-domain.com', // Your own domain
    ],
  },
}

module.exports = nextConfig
