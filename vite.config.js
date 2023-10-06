import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    testMatch: ["./__tests__/**/*.test.jsx"],
    // reporters: ["default", "html"],
    setupFiles: ["./__tests__/vitest.setup.js"],

    coverage: {
      reporter: ["html"],
      reportsDirectory: "./__tests__/unit/coverage",
      enabled: true,
    },
  },
});
