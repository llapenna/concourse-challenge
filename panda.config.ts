import { defineConfig } from "@pandacss/dev";

import { recipe as gptButtonRecipe } from "./src/components/common/gpt-button/styles";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: base,
    recipes: {
      gptButton: gptButtonRecipe,
    },
  },
  conditions: themeConditions,

  // The output directory for your css system
  outdir: "styled-system",
  importMap: "@/panda",
});
