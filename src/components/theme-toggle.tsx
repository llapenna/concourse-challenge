import { Toggle } from "react-toggle-component";
import { Moon, SunDim } from "phosphor-react";

import { useTheme } from "@/hooks/useTheme";
import { hstack } from "@/panda/patterns";

export const ThemeToggle = () => {
  const { toggle } = useTheme();
  return (
    <label htmlFor="theme-toggle" className={hstack({ cursor: "pointer" })}>
      <SunDim size={24}></SunDim>
      <Toggle
        onToggle={toggle}
        name="theme-toggle"
        leftBackgroundColor="#ecfdf5"
        leftKnobColor="#070F2B"
        leftBorderColor="#070F2B"
        rightBackgroundColor="#070F2B"
        rightKnobColor="#ecfdf5"
        rightBorderColor="#ecfdf5"
      ></Toggle>
      <Moon size={24}></Moon>
    </label>
  );
};
