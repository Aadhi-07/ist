export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#022731',
        muted: '#3f5c66',
        mist: '#e3eef0',
        num: '#bcd6dc',
        accent: '#397493',
        'accent-lt': '#88b3b9',
      },
      spacing: { pad: 'clamp(18px,3.2vw,46px)' },
      screens: { mob: { max: '760px' } },
      transitionTimingFunction: { logo: 'cubic-bezier(.2,.8,.2,1)' },
      keyframes: {
        rise: { to: { transform: 'translateY(0)' } },
        fade: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
        marquee: { to: { transform: 'translateX(-50%)' } },
        beat: { '50%': { transform: 'scale(1.2)', opacity: '.55' } },
      },
      animation: {
        rise: 'rise 1.1s cubic-bezier(.2,.8,.15,1) forwards',
        fade: 'fade 1s .7s ease forwards',
        marquee: 'marquee 60s linear infinite',
        beat: 'beat 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
