import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep this in sync with the GitHub repository name.
  base: '/paradise-nursery/',
});
