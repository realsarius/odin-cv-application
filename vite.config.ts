import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  plugins: [react()],
});
