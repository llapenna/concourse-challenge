import { ThemeContext } from "@/context/Theme";
import { useContext } from "react";

export const useTheme = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return { theme, toggle };
};
