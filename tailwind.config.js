export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '33%': { transform: 'scale(1.2) translate(10px, -10px)' },
          '66%': { transform: 'scale(0.8) translate(-10px, 10px)' },
          '100%': { transform: 'scale(1) translate(0,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        blob: 'blob 8s infinite',
        float: 'float 4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 3s infinite',
      },
      colors: {
        'custom-purple': '#9B5DE5',
        'custom-pink': '#F15BB5',
        'custom-blue': '#00BBF9',
        'custom-green': '#00F5D4',
        'custom-yellow': '#FFAC41',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
        'education-gradient': 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        'projects-gradient': 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(155, 93, 229, 0.6)',
        'glow-pink': '0 0 20px rgba(241, 91, 181, 0.6)',
        'glow-blue': '0 0 20px rgba(0, 187, 249, 0.6)',
      },
    },
  },
  plugins: [],
};
