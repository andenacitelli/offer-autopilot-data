import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    passWithNoTests: true, // TODO: Temporary!
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
