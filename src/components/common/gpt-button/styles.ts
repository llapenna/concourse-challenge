import { defineSlotRecipe } from "@pandacss/dev";

export const recipe = defineSlotRecipe({
  slots: ["wrapper", "inner"],
  className: "gptButton",
  base: {
    wrapper: {
      position: "relative",
      borderRadius: "full",
      padding: 2,
    },
    inner: {
      borderRadius: "full",

      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 4,

      bg: "buttonBg",

      cursor: "pointer",
      color: "altText",

      px: 4,
      py: 2,

      "&:hover svg": {
        animation: "sparkleBounce 1s infinite",
      },

      "&::after": {
        content: "''",

        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",

        borderRadius: "full",

        zIndex: -1,
        animation: "bgSpin 5s infinite",
        backgroundSize: "400%",
        bgGradient: "rotatingButton",
        filter: "blur(10px)",
      },
    },
  },
});
