import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5032,
    host: 'ostra.cyberpunk.co.in',
    allowedHosts: true
  }
});
