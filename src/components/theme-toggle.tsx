import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { toggle } = useTheme();
  // TODO: add styles/animations
  return <button onClick={toggle}>toggle</button>;
};
