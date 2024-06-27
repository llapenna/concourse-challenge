import { hstack, vstack } from "@/panda/patterns";
import { container } from "./styles";
import { Day } from "./day";
import { Table } from "./table";

export const Graph = () => {
  const classes = container();

  return (
    <div className={vstack()}>
      <div className={classes.graph}>
        <Table></Table>
      </div>
      {/* TODO: align to the right */}
      <div className={classes.legend}>
        Less
        <div className={hstack({ gap: 1 })}>
          <Day as="div" intensity={0}></Day>
          <Day as="div" intensity={1}></Day>
          <Day as="div" intensity={2}></Day>
          <Day as="div" intensity={3}></Day>
          <Day as="div" intensity={4}></Day>
        </div>
        More
      </div>
    </div>
  );
};
