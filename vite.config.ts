import { builtinModules } from 'module'

import { defineConfig } from 'vite'

import packageJson from './package.json'

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'build',
    lib: {
      name: 'fkn-proxy-origins',
      fileName: 'index',
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        ...builtinModules ?? [],
        ...Object.keys(packageJson.dependencies ?? {})
      ]
    }
  }
})
