import { useState } from "react";

import { ThemeToggle } from "../theme-toggle";
import { GPTButton } from "../common";

import { wrapper } from "./styles";
import { Chatbox } from "./chatbox";

interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const classes = wrapper();

  return (
    <main className={classes.main}>
      <nav className={classes.navbar}>
        <ThemeToggle></ThemeToggle>
      </nav>
      <div className={classes.content}>{children}</div>
      <div className={classes.gptButton}>
        <GPTButton onClick={() => setIsChatOpen(true)}></GPTButton>
      </div>

      <Chatbox isOpen={isChatOpen} close={() => setIsChatOpen(false)}></Chatbox>
    </main>
  );
};
