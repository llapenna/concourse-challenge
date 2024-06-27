import { cva, sva } from "@/panda/css";

export const container = sva({
  slots: ["graph", "legend"],
  base: {
    graph: {
      backgroundColor: "graphBg",
      padding: 4,
      borderRadius: 8,
    },
    legend: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: 3,
    },
  },
});

export const graph = cva({
  base: {
    borderCollapse: "separate",
    borderSpacing: 1,
  },
});

export const daysAxis = cva({
  base: {
    color: "legendText",
    lineHeight: "12px",
    paddingRight: 2,
    textAlign: "right",
  },
});

export const monthsAxis = cva({
  base: {
    color: "legendText",
    maxWidth: "dayBox",
    textAlign: "left",
  },
});

export const day = sva({
  className: "day",
  slots: ["box", "tooltip"],
  base: {
    box: {
      height: "dayBox",
      width: "dayBox",
      borderRadius: 3,
      position: "relative",

      "&:hover .day__tooltip": {
        display: "flex",
      },
    },
    tooltip: {
      display: "none",
      flexDirection: "row",
      gap: 2,
      justifyContent: "center",

      zIndex: 1,
      position: "absolute",

      py: 2,
      px: 4,
      width: "100px",

      borderRadius: 4,
      bg: "black",
      color: "white",
    },
  },
  variants: {
    intensity: {
      0: {
        box: {
          backgroundColor: "intensity0",
        },
      },
      1: {
        box: {
          backgroundColor: "intensity1",
        },
      },
      2: {
        box: {
          backgroundColor: "intensity2",
        },
      },
      3: {
        box: {
          backgroundColor: "intensity3",
        },
      },
      4: {
        box: {
          backgroundColor: "intensity4",
        },
      },
    },
  },
});
