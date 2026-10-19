import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Standard build tooling only: Vue SFC support + the official Tailwind plugin.
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
