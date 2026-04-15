import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://kidtour-plugin-template.vercel.app/",
  server: {
    port: 5176,
  },
});
