import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ZahidKhan_portfolio/',  // <-- make sure this is exactly like this
  plugins: [react()],
})
