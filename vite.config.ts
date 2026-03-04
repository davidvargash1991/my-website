import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'David Vargas Portfolio',
        short_name: 'David Vargas',
        description: 'My personal portfolio website',
        theme_color: '#2087c5',
        background_color: '#2087c5',
        display: 'standalone',
        start_url: '/'
      }
    })
  ],
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
