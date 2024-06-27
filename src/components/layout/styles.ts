import { sva } from "@/panda/css";

export const styles = sva({
  slots: ["main", "navbar", "content", "gpt"],
  base: {
    main: {
      // Set theme colors
      backgroundColor: "mainBg",
      color: "baseText",

      minHeight: "100vh",
      minWidth: "100vw",

      padding: "4",
    },
    navbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    content: {
      mt: 32,
    },
    gpt: {
      position: "fixed",
      width: "100vw",

      display: "flex",
      justifyContent: "center",
      bottom: 16,
    },
  },
});
