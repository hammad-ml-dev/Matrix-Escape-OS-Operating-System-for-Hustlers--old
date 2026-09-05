import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Live demo: https://hammad-ml-dev.github.io/Matrix-Escape-OS-Operating-System-for-Hustlers-/
export default defineConfig({
  plugins: [react()],
  base: '/Matrix-Escape-OS-Operating-System-for-Hustlers-/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
});
