import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For Tailwind CSS v4 with @tailwindcss/vite
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
