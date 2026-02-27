import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Chuks-kitchen-app/", 
  plugins: [react()],
});
