import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/** @type {import('tailwindcss').Config} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
