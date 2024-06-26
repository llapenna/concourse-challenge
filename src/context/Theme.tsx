import { createContext, useState } from "react";

type AvailableThemes = "dark" | "light";
interface Context {
  theme: AvailableThemes;
  toggle: () => void;
}
export const ThemeContext = createContext<Context>({
  theme: "light",
  toggle: () => {},
});
ThemeContext.displayName = "ThemeContext";

interface Props {
  children: React.ReactNode;
}
export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<AvailableThemes>("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div data-color-mode={theme}>
      <ThemeContext.Provider value={{ theme, toggle }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
