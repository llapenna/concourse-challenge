import { defineThemeVariant } from "@pandacss/dev";

export const base = defineThemeVariant({
  tokens: {},
  semanticTokens: {
    colors: {
      background: {
        value: {
          base: "#FAFAFA",
          _dark: "#070F2B",
        },
      },
      text: {
        value: {
          base: "#333",
          _dark: "#FAFAFA",
        },
      },
    },
  },
});

export const themeConditions = {
  dark: "[data-color-mode=dark] &",
};
