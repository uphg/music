import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { svgSprites } from './vite-plugins/svg-sprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSprites({ noOptimizeList: ['pig', 'logo', 'chart', 'category', 'export', 'noty', 'calendar'] })
  ],
})
