import { resolve } from 'node:path'
import macrosPlugin from 'vite-plugin-babel-macros';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as packageJson from './package.json'
// https://vitejs.dev/config/

export default defineConfig(() => ({
  plugins: [
    react(),
    macrosPlugin(),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.js'),
      name: 'SetxoComponent',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    manifest: true,
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  }
}))