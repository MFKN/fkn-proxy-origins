import { builtinModules } from 'module'

import { defineConfig } from 'vite'
import typescript2 from "rollup-plugin-typescript2"

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
  },
  plugins: [
    {
      ...typescript2({
        abortOnError: false
      }),
      apply: 'build'
    }
  ]
})
