import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black-1': 'hsl(234, 14%, 14%)',
        'raisin-black-2': 'hsl(231, 12%, 12%)',
        'raisin-black-3': 'hsl(228, 12%, 17%)',
        'eerie-black': 'hsl(240, 11%, 9%)',
        'light-gray': 'hsl(0, 0%, 80%)',
        'platinum': 'hsl(0, 4%, 91%)',
        'xiketic': 'hsl(275, 24%, 10%)',
        'orange': 'hsl(31, 100%, 51%)',
        'onyx': 'hsl(240, 5%, 26%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'sonsie': ['Sonsie One', 'cursive'],
      },
      fontSize: {
        'hero': '150px',
        '7xl': '90px',
        '6xl': '54px',
      },
      backgroundImage: {
        'hero-pattern': "url('https://i.postimg.cc/XqXRdnV1/hero-banner.jpg')",
        'section-wrapper': "url('https://i.postimg.cc/VvvgBg2R/section-wrapper-bg.jpg')",
        'about-shadow': "url('https://i.postimg.cc/8zmyG7dL/about-img-shadow.png')",
        'newsletter': "url('https://i.postimg.cc/43KzBDHM/newsletter-bg.jpg')",
        'footer': "url('https://i.postimg.cc/VkDjmjCj/footer-bg.jpg')",
        'gears-card': "url('https://i.postimg.cc/JhHdWL8j/gears-card-bg.png')",
      },
      clipPath: {
        'polygon-1': 'polygon(90% 0, 100% 34%, 100% 100%, 10% 100%, 0 66%, 0 0)',
        'polygon-2': 'polygon(0 0, 100% 0%, 82% 100%, 0% 100%)',
        'polygon-3': 'polygon(0 0, 100% 0%, 100% 100%, 18% 100%)',
        'polygon-4': 'polygon(96% 0, 100% 36%, 100% 100%, 4% 100%, 0 66%, 0 0)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
