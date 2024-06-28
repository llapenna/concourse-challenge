import { Sparkle } from "phosphor-react";
import { MouseEventHandler } from "react";

import { gptButton } from "@/panda/recipes";

interface Props {
  onClick?: MouseEventHandler;
}
export const GPTButton = ({ onClick }: Props) => {
  const classes = gptButton();
  return (
    <div className={classes.wrapper}>
      <button onClick={onClick} className={classes.inner}>
        <Sparkle size={20}></Sparkle>
        Ask me anything!
      </button>
    </div>
  );
};
