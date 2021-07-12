import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import graphql from "@rollup/plugin-graphql";
import reactJsx from "vite-react-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    port: parseInt(process.env.DEV_SERVER_PORT) || 3000,
  },
  plugins: [reactRefresh(), tsconfigPaths(), graphql(), reactJsx()],
  clearScreen: false,
});
