import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "apps/spa",
  base: "/app/",
  server: {
    port: parseInt(process.env.DEV_SERVER_PORT || "3000"),
    hmr: {
      clientPort: process.env.DEV_HMR_PORT ? parseInt(process.env.DEV_HMR_PORT) : undefined,
    },
  },
  build: {
    outDir: "../../dist/apps/spa",
  },
  plugins: [react()],
});
