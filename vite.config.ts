import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Allow serving images stored under Cursor's project assets directory.
      // We'll reference them using Vite's `/@fs/<absolute-path>` URL.
      fs: {
        allow: [
          '/Users/peaches/.cursor/projects/Users-peaches-Sites-MITRQAT/assets',
          '/Users/peaches/Sites/MITRQAT',
        ],
      },
    },
  };
});
