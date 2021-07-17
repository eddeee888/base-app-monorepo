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
  /**
   * Unable to optimize `@/shared/ui` when `vite-react-jsx` is used.
   * This means files from this module are being loaded individually, making heaps of request instead of one
   * https://github.com/alloc/vite-react-jsx/issues/9
  optimizeDeps: {
    include: ["@/shared/ui"],
  },
   */
  plugins: [reactRefresh(), tsconfigPaths(), graphql(), reactJsx()],
  clearScreen: false,
});
