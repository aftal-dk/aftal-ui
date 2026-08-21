import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

// The gallery consumes the package straight from the repo root, so what you
// see on ui.aftal.dev is always the current source - no publish step.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@aftal/ui': path.resolve(root, '..') },
  },
  server: {
    fs: { allow: [path.resolve(root, '..')] },
  },
});
