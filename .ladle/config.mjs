export default {
  stories: ["libs/**/*.stories.{ts,tsx}", "apps/kun/src/*.stories.{ts,tsx}", "apps/note/src/*.stories.{ts,tsx}"],
  outDir: "public/ladle",
  addons: {
    rtl: {
      enabled: false,
    },
  },
  viteConfig: ".ladle/vite.config.ts",
};
