import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'data': resolve(__dirname, 'src/data'),
      'components': resolve(__dirname, 'src/components'),
      'icons': resolve(__dirname, 'src/icons'),
      'styles': resolve(__dirname, 'src/styles'),
      'utils': resolve(__dirname, 'src/utils'),
    },
  },
})
