import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    testMatch: ["./__tests__/**/*.test.jsx"],
  },
  // test: {
  //   environment: "jsdom",
  //    setupFiles: ["./__tests__/vitest.setup.js"],
  //   testMatch: ["./__tests__/**/*.test.jsx"],
  //   globals: true,
  // },
});
