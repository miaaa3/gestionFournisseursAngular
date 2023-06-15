/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}',
  "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xlMax': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xlMax': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgMax': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdMax': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smMax': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
    },
    extend: {},
  
    plugins: [
      require('flowbite/plugin'),
    ],
   
}
