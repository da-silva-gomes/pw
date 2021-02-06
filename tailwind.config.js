module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  prefix: '',
  darkMode: false,
  theme: {
    extend: {
      inset: {
        '-46': '-11.5rem',
      },
      height: {
        '104': '38rem',
      },
      width: {
        '98': '36rem',
        '104': '70%',
      },
      zIndex: {
        '-1': '-1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out infinite',
      },
      transitionProperty: {
        'bg': 'background',
      }
    },
    fontFamily: {
      'mono': ['Space Mono', 'monospaced'],
      'grotesk': ['Space Grotesk', 'monospaced'],
    },
    colors: {
      bodyBg: '#f2f2f2',
      white: '#fff',
      black: '#2b2b2b',
      pink: '#f5bfcd',
      yellow: '#f0fc51',
      blue: '#88eaff',
      red: '#c61633'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
