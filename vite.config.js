import { defineConfig } from 'vite'
import postcss from './postcss.config.cjs'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // define: {
  //   'process.env': process.env
  // },
  server: {
    port: 3000, // ← Change to your desired port npm run dev -- --port 3000
  },
  css: {
    postcss,
  },
  plugins: [react()],
  test: {
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
