import { styles } from "./styles";
import { ThemeToggle } from "../theme-toggle";

interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  const classes = styles();
  return (
    <main className={classes.main}>
      <nav className={classes.navbar}>
        <ThemeToggle></ThemeToggle>
      </nav>
      <div className={classes.content}>{children}</div>
      {/* TODO: define and style this component */}
      <button className={classes.gpt}>Ask me anything!</button>
    </main>
  );
};
