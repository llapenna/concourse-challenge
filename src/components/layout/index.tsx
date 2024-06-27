import { styles } from "./styles";
import { ThemeToggle } from "../theme-toggle";
import { GPTButton } from "../common";

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
      <div className={classes.gpt}>
        <GPTButton></GPTButton>
      </div>
    </main>
  );
};
