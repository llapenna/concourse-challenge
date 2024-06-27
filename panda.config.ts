import { defineConfig } from "@pandacss/dev";

import { recipe as gptButtonRecipe } from "./src/components/common/gpt-button/styles";
import { base, themeConditions, keyframes } from "./src/styles/theme";
import { global } from "./src/styles/global";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  globalCss: global,
  theme: {
    extend: base,
    keyframes,
    recipes: {
      gptButton: gptButtonRecipe,
    },
  },
  conditions: themeConditions,

  // The output directory for your css system
  outdir: "styled-system",
  importMap: "@/panda",
});
