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
        description: '26rem',
      },
      boxShadow: {
        custom: '0 0 0 1px #e3e5e8,0 1px 2px 0 rgba(0,0,0,.04)',
      },
      colors: {
        titleSelected: '#080808',
        title: 'rgba(8,8,8,.5)',
        navName: 'rgba(16,16,16,.55)',
        navNameActive: '#101010',
        bar: 'rgb(226 232 240)',
        button: '#80868c',
        commerceCurrent: '#606060',
        commerce: 'rgba(113,113,113,.6)',
        unique: '#9858f5',
        liveNews: '#f4361e',
        liveShopText: '#606060',
      },
      borderColor: {
        customColor: 'rgba(211,213,215,.8)',
        adColor: '#e3e5e8',
        liveButton: '#f4361e',
      },
      backgroundColor: {
        dot: '#d3d5d7',
        bar: 'rgba(245,248,251,.6)',
        todayPick: '#f5f7f8',
        brandShopColor: '#f5f8fb',
        discountLabel: 'rgba(0,0,0,.5)',
        hotDeal: '#fff3f0',
        label: 'rgba(0,0,0,.3)',
      },
      backgroundImage: {
        plusDeal: 'linear-gradient(90deg,#ff7043,#ff3356)',
      },
    },
  },
  plugins: [],
};
