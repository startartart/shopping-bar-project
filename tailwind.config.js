/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        custom: '58rem',
      },
      minHeight: {
        main: '31rem',
      },
      boxShadow: {
        custom: '0 0 0 1px #e3e5e8,0 1px 2px 0 rgba(0,0,0,.04)',
      },
      colors: {
        titleSelected: '#080808',
        title: 'rgba(8,8,8,.5)',
        bar: 'rgb(226 232 240)',
        button: '#80868c',
        commerceCurrent: '#606060',
        commerce: 'rgba(113,113,113,.6)',
        unique: '#9858f5',
      },
      borderColor: {
        customColor: 'rgba(211,213,215,.8)',
        adColor: '#e3e5e8',
      },
      backgroundColor: {
        dot: '#d3d5d7',
        bar: 'rgba(245,248,251,.6)',
        todayPick: '#f5f7f8',
      },
    },
  },
  plugins: [],
};
