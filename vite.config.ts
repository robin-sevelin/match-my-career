import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/match-my-career/',
  optimizeDeps: {
    exclude: ['@digi/arbetsformedlingen'],
  },
  plugins: [react()],
});
