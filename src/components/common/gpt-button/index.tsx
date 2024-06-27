import { gptButton } from "@/panda/recipes";
import { Sparkle } from "phosphor-react";

interface Props {
  onClick?: () => void;
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
