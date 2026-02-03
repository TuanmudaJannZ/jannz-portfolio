import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://portofolio.jannz.my.id/',  // ⭐ HARUS '/' untuk custom domain
})
