import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      fs: false,
      path: false,
      os: false,
      crypto: false,
      module: false,
      perf_hooks: false,
      http: false,
      https: false,
      zlib: false,
      assert: false,
      events: false,
      'node:fs': false,
      'node:path': false,
      'node:os': false,
      'node:crypto': false,
      'node:module': false,
      'node:perf_hooks': false,
    },
  },
  build: {
    rollupOptions: {
      external: ['fsevents'], // ignora fsevents no build
    },
  },
})
