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

/** Serve `Library/` at `/library-materials/*` and copy into `dist` on build. */
function libraryMaterialsPlugin(): Plugin {
  const libraryRoot = path.resolve(__dirname, 'Library');
  let outDir = 'dist';

  return {
    name: 'library-materials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(libraryRoot)) return;
      server.middlewares.use(
        '/library-materials',
        express.static(libraryRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(libraryRoot)) return;
      const dest = path.join(outDir, 'library-materials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(libraryRoot, dest, {recursive: true});
    },
  };
}

/** Serve `Laboratories/` at `/laboratories-materials/*` and copy into `dist` on build. */
function laboratoriesMaterialsPlugin(): Plugin {
  const laboratoriesRoot = path.resolve(__dirname, 'Laboratories');
  let outDir = 'dist';

  return {
    name: 'laboratories-materials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(laboratoriesRoot)) return;
      server.middlewares.use(
        '/laboratories-materials',
        express.static(laboratoriesRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(laboratoriesRoot)) return;
      const dest = path.join(outDir, 'laboratories-materials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(laboratoriesRoot, dest, {recursive: true});
    },
  };
}

/** Serve `Industry/` at `/industry-materials/*` and copy into `dist` on build. */
function industryMaterialsPlugin(): Plugin {
  const industryRoot = path.resolve(__dirname, 'Industry');
  let outDir = 'dist';

  return {
    name: 'industry-materials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(industryRoot)) return;
      server.middlewares.use(
        '/industry-materials',
        express.static(industryRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(industryRoot)) return;
      const dest = path.join(outDir, 'industry-materials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(industryRoot, dest, {recursive: true});
    },
  };
}

/** Serve `Research/` at `/research-materials/*` and copy into `dist` on build. */
function researchMaterialsPlugin(): Plugin {
  const researchRoot = path.resolve(__dirname, 'Research');
  let outDir = 'dist';

  return {
    name: 'research-materials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(researchRoot)) return;
      server.middlewares.use(
        '/research-materials',
        express.static(researchRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(researchRoot)) return;
      const dest = path.join(outDir, 'research-materials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(researchRoot, dest, {recursive: true});
    },
  };
}

/** Serve `GPMO/` at `/gpmo-materials/*` and copy into `dist` on build. */
function gpmoMaterialsPlugin(): Plugin {
  const gpmoRoot = path.resolve(__dirname, 'GPMO');
  let outDir = 'dist';

  return {
    name: 'gpmo-materials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(gpmoRoot)) return;
      server.middlewares.use(
        '/gpmo-materials',
        express.static(gpmoRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(gpmoRoot)) return;
      const dest = path.join(outDir, 'gpmo-materials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(gpmoRoot, dest, {recursive: true});
    },
  };
}

/** Serve `Flexible Learning/` at `/flexible-learning-materials/*` and copy into `dist` on build. */
function flexibleLearningMaterialsPlugin(): Plugin {
  const flexibleRoot = path.resolve(__dirname, 'Flexible Learning');
  let outDir = 'dist';

  return {
    name: 'flexible-learning-materials-static',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      if (!fs.existsSync(flexibleRoot)) return;
      server.middlewares.use(
        '/flexible-learning-materials',
        express.static(flexibleRoot, {index: false, fallthrough: true}),
      );
    },
    closeBundle() {
      if (!fs.existsSync(flexibleRoot)) return;
      const dest = path.join(outDir, 'flexible-learning-materials');
      fs.mkdirSync(path.dirname(dest), {recursive: true});
      fs.cpSync(flexibleRoot, dest, {recursive: true});
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
      libraryMaterialsPlugin(),
      laboratoriesMaterialsPlugin(),
    industryMaterialsPlugin(),
      researchMaterialsPlugin(),
      gpmoMaterialsPlugin(),
      flexibleLearningMaterialsPlugin(),
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
