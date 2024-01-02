import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    testMatch: ["./__tests__/**/*.test.jsx"],
    reporters: ["default", "html"],
    // reportsDirectory: "./vitest-ui",
    setupFiles: ["./vitest.setup.js"],

    coverage: {
      reporter: ["html"],
      reportsDirectory: "./coverage",
      enabled: true,
    },
  },
});
