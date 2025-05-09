import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compress from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compress({ algorithm: 'brotliCompress' })],
});
