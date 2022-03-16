import { fileURLToPath } from "url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./app", import.meta.url)),
    },
  },
  test: {
    globals: true,
    setupFiles: ["src/setupTests.ts"],
    includeSource: ["src/**/*.{js,ts,tsx}", "app/**/*.{js,ts,tsx}"],
    deps: {
      external: [
        "../../libs",
        "../../libs/node_modules/**",
        "**/node_modules/**",
        "**/dist/**",
      ],
    },
  },
});
