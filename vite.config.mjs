import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { outDir: "docs", target: "es2020" },
  test: { environment: "jsdom", globals: true, setupFiles: ["./src/setupTests.js"] },
});
