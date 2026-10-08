/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain:    '#FAF7F2', // Off-white page canvas
        cardBg:    '#FFFFFF', // Crisp white card
        'brand-blue': {
          DEFAULT: '#111111', // Primary black
          nav:     '#111111',
          primary: '#111111',
          hover:   '#262626', // Charcoal
          light:   '#FAF7F2',
          surface: '#F1EBE0',
        },
        'brand-gold': {
          DEFAULT: '#C9B79C', // Main beige accent
          rich:    '#C9B79C',
          hover:   '#A8946F',
          deep:    '#7A6A4F', // Deep beige (text & borders)
          glow:    '#F1EBE0', // Soft beige tint / glow
        },
        brand: {
          blue:       '#111111',
          blueHover:  '#262626',
          blueLight:  '#FAF7F2',
          gold:       '#C9B79C',
          goldHover:  '#A8946F',
          goldDeep:   '#7A6A4F',
          goldLight:  '#F1EBE0',
          goldBorder: '#DDD2BE',
          black:      '#111111', // Primary black
          dark:       '#000000',
        },
        gold: {
          DEFAULT: '#C9B79C',
          dark:    '#7A6A4F',
          light:   '#F1EBE0',
          border:  '#DDD2BE',
        },
        maroon: {
          DEFAULT: '#111111',
          dark:    '#000000',
          light:   '#FAF7F2',
        },
        textMain:  '#1F1F1F', // Near-black text
        textMuted: '#6B7280', // Muted text
        borderLight: '#DDD2BE', // Card borders (light beige)
      },
      fontFamily: {
        sans:      ['"DM Sans"', '"Outfit"', '"Noto Sans Tamil"', 'system-ui', '-apple-system', 'sans-serif'],
        dmsans:    ['"DM Sans"', 'sans-serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        outfit:    ['"Outfit"', 'sans-serif'],
        brand:     ['"Cinzel"', '"DM Sans"', '"Outfit"', '"Noto Sans Tamil"', 'serif'],
        headline:  ['"DM Sans"', '"Outfit"', '"Noto Sans Tamil"', 'sans-serif'],
      },
      boxShadow: {
        soft:   '0 1px 3px rgba(0,0,0,0.05)',
        gold:   '0 4px 20px -2px rgba(201, 183, 156, 0.25)',
      },
      borderRadius: {
        'card': '12px',
        'btn': '10px',
        'input': '10px',
        'table': '12px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'floatDelay': 'float 4s ease-in-out 1.5s infinite',
        'slideUp': 'slideUp 0.6s ease forwards',
        'fadeIn': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
