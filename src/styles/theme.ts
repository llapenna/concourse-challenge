import { defineKeyframes, defineThemeVariant } from "@pandacss/dev";

const themedToken = (base: string, dark?: string) => ({
  value: {
    base,
    _dark: dark || base,
  },
});

export const base = defineThemeVariant({
  tokens: {},
  semanticTokens: {
    sizes: {
      dayBox: { value: "12px" },
    },
    colors: {
      // TODO: Define more theme colors
      // Background
      mainBg: themedToken("{colors.emerald.50}", "#070F2B"),
      graphBg: themedToken("{colors.white}"),
      buttonBg: themedToken("{colors.black}", "{colors.white}"),

      intensity0: themedToken("{colors.green.100}", "{colors.red.100}"),
      intensity1: themedToken("{colors.green.300}", "{colors.red.300}"),
      intensity2: themedToken("{colors.green.400}", "{colors.red.400}"),
      intensity3: themedToken("{colors.green.500}", "{colors.red.500}"),
      intensity4: themedToken("{colors.green.600}", "{colors.red.600}"),

      // Text
      baseText: themedToken("{colors.zinc.700}", "{colors.neutral.50}"),
      altText: themedToken("{colors.neutral.50}", "{colors.zinc.700}"),
      legendText: themedToken("{colors.gray.400}"),
    },
    gradients: {
      rotatingButton: {
        value:
          "linear-gradient(45deg,#ff595e,#ffca3a,#8ac926,#1982c4,#6a4c93,#ff6700);",
      },
    },
  },
});

export const keyframes = defineKeyframes({
  bgSpin: {
    "0%": { backgroundPosition: "0% 0%" },
    "50%": { backgroundPosition: "100% 0%" },
    "100%": { backgroundPosition: "0% 0%" },
  },
  sparkleBounce: {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(1.25)" },
    "100%": { transform: "scale(1)" },
  },
});

export const themeConditions = {
  dark: "[data-color-mode=dark] &",
};
