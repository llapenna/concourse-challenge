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
      position: "relative",

      padding: "4",
    },
    navbar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    content: {
      flex: 1,
    },
    gpt: {
      position: "absolute",
      border: "1px solid black",

      // Position the button right in the middle of the screen
      left: "50%",
      bottom: 16,
    },
  },
});
