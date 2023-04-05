/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#9C2675',
        'dark-purple-bg': '#ac0e77',
        'dark-purple-bg-focus': '#b35d8b',
        'input-color': '#fde8f6',
        'input-border-color': '#cb8bab',
        'bg-invalid': 'ffd7d7',
        boxShadow: {
          custom:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        },
        width: {
          128: '32rem',
          a4: '210mm',
        },
        height: {
          a4: '297mm',
        },
        borderWidth: {
          DEFAULT: '1px',
          0: '0',
          2: '2px',
          3: '3px',
          4: '4px',
          6: '6px',
          8: '8px',
          10: '10px',
        },
        maxWidth: {
          90: '90%',
        },
      },
    },
  },
  plugins: [],
};
