import { cva, sva } from "@/panda/css";

export const wrapper = sva({
  slots: ["main", "navbar", "content", "gptButton"],
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
    gptButton: {
      position: "fixed",
      width: "100vw",

      display: "flex",
      justifyContent: "center",
      bottom: 16,
    },
  },
});

export const chat = sva({
  slots: ["backdrop", "wrapper", "close", "chat", "suggestions", "form"],
  base: {
    backdrop: {
      position: "fixed",
      width: "100vw",
      height: "100vh",

      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",

      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      p: 5,

      backgroundColor: "rgba(0,0,0,0.5)",
    },
    wrapper: {
      width: "400px",
      height: "100%",

      display: "flex",
      flexDirection: "column",
      gap: 4,

      padding: 4,

      bg: "chatBg",
      borderRadius: 16,
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    close: {
      cursor: "pointer",
      width: "min-content",
    },
    suggestions: {
      flexGrow: 1,

      display: "grid",
      gridTemplateColumns: "repeat(2, 150px)",
      gridTemplateRows: "repeat(2, 100px)",
      alignContent: "center",
      justifyContent: "center",
      gap: 4,
    },
    chat: {
      flexGrow: 1,
      overflowY: "scroll",
      padding: 4,
      display: "flex",
      flexDirection: "column",
      gap: 4,
    },
    form: {
      display: "flex",
      flexDirection: "row",
      gap: 4,

      "& input": {
        width: "100%",
        px: 2,
        borderBottom: "1px solid lightgrey",
      },
      "& button": {
        cursor: "pointer",
        backgroundColor: "sendButtonBg",
        color: "white",
        padding: "8px 16px",
        borderRadius: "4px",
      },
    },
  },
  variants: {
    open: {
      true: {
        backdrop: {
          display: "flex",
        },
      },
      false: {
        backdrop: {
          display: "none",
        },
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const chatBubble = sva({
  slots: ["wrapper", "role", "content"],
  base: {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "80%",
      p: 4,

      bg: "bubbleChatBg",
      borderRadius: 16,
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    role: {
      fontSize: 12,
      fontWeight: "bold",
    },
  },
  variants: {
    role: {
      user: {
        wrapper: {
          alignSelf: "flex-end",
          textAlign: "right",
        },
      },
      system: {
        wrapper: {
          alignSelf: "flex-start",
          textAlign: "left",
        },
      },
    },
  },
});

export const suggestion = cva({
  base: {
    bg: "bubbleChatBg",
    cursor: "pointer",
    border: "1px solid lightgrey",
    borderRadius: 4,
  },
});
