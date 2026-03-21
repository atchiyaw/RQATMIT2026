import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import express from 'express';
import fs from 'node:fs';
import path from 'path';
import {fileURLToPath} from 'node:url';
import {defineConfig, loadEnv, type Plugin} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Serve `Faculty Credentials/` at `/faculty-credentials/*` (dev) and copy into `dist` on build. */
function facultyCredentialsPlugin(): Plugin {
  const credentialsRoot = path.resolve(__dirname, 'Faculty Credentials');
  let outDir = 'dist';

  return {
    name: 'faculty-credentials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(credentialsRoot)) return;
      server.middlewares.use(
        '/faculty-credentials',
        express.static(credentialsRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(credentialsRoot)) return;
      const dest = path.join(outDir, 'faculty-credentials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(credentialsRoot, dest, {recursive: true});
    },
  };
}

/** Serve `Faculty Photo/` at `/faculty-photos/*` and copy into `dist` on build. */
function facultyPhotosPlugin(): Plugin {
  const photosRoot = path.resolve(__dirname, 'Faculty Photo');
  let outDir = 'dist';

  return {
    name: 'faculty-photos-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(photosRoot)) return;
      server.middlewares.use(
        '/faculty-photos',
        express.static(photosRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(photosRoot)) return;
      const dest = path.join(outDir, 'faculty-photos');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(photosRoot, dest, {recursive: true});
    },
  };
}

/** Serve `Level of Accreditation/` at `/level-of-accreditation/*` and copy into `dist` on build. */
function levelOfAccreditationPlugin(): Plugin {
  const rootDir = path.resolve(__dirname, 'Level of Accreditation');
  let outDir = 'dist';

  return {
    name: 'level-of-accreditation-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(rootDir)) return;
      server.middlewares.use(
        '/level-of-accreditation',
        express.static(rootDir, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(rootDir)) return;
      const dest = path.join(outDir, 'level-of-accreditation');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(rootDir, dest, {recursive: true});
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      facultyCredentialsPlugin(),
      facultyPhotosPlugin(),
      levelOfAccreditationPlugin(),
    ],
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
