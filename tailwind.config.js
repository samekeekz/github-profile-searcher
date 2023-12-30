/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        spaceMono: ["Space Mono", 'sans-serif']
      },
      colors: {
        background: '#f6f8ff',
        backgroundDark: '#141d2f',

        windowBackground: '#fefefe',
        windowBackgroundDark: '#1e2a47',

        primaryBtn: '#0079ff',

        toggle: 'rgba(105, 124, 154, 1)',
        toggleDark: 'rgba(255, 255, 255, 1)',

        header: '#222731'
      },
      fontSize: {
        'headingM': [
          '26px',
          {
            lineHeight: 'normal',
            fontWeight: '700',
          }
        ],
        'textL': [
          '22px',
          {
            lineHeight: '33px',
            fontWeight: '700'
          }
        ],
        'textM': [
          '18px',
          {
            lineHeight: '25px',
            fontWeight: 'normal'
          }
        ],
        'textS': [
          '16px',
          {
            lineHeight: 'normal',
            fontWeight: '400'
          }
        ],
        'textXs': [
          '15px',
          {
            lineHeight: 'normal',
            fontWeight: '400'
          }
        ],
        'textXss': [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: '400'
          }
        ],
        'textXssBold': [
          '13px',
          {
            lineHeight: 'normal',
            fontWeight: '700'
          }
        ],
        'textDescr': [
          '15px',
          {
            lineHeight: '25px',
            fontWeight: 'normal'
          }
        ],
        'errorText': [
          '15px',
          {
            lineHeight: 'normal',
            fontWeight: '700'
          }
        ]
      },
      boxShadow: {
        shadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
      },
      borderRadius: {
        windowRadius: '15px',
        contentRadius: '10px'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "wide": "1440px",
        '2xl': '1536px',
      }

    },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { "plaintext": "javascript" }
}