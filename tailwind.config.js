/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm: '4px',
      DEFAULT: '6px',
      lg: '12px',
      full: '9999px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      primary: '#22262A',
      text: '#353841',
      muted: {
        DEFAULT: '#B9C1C9',
        dark: '#555A5D',
        light: '#EAEDF0',
      },
      inactive: '#ADB5BD',
      error: '#F03E3E',
    },
    fontFamily: {
      sans: [
        'Pretendard',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'sans-serif',
      ],
      serif: ['serif'],
    },
    fontSize: {
      display1: ['64px', '80px'],
      display2: ['40px', '56px'],
      heading1: ['36px', '50px'],
      heading2: ['32px', '48px'],
      title1: ['24px', '32px'],
      title2: ['18px', '28px'],
      subtitle: ['16px', '24px'],
      body: ['14px', '22px'],
      caption: ['12px', '20px'],
    },
  },
  plugins: [],
};

export default config;
