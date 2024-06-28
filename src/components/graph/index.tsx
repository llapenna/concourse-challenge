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
          <Day as="div" intensity={0} day={null}></Day>
          <Day as="div" intensity={1} day={null}></Day>
          <Day as="div" intensity={2} day={null}></Day>
          <Day as="div" intensity={3} day={null}></Day>
          <Day as="div" intensity={4} day={null}></Day>
        </div>
        More
      </div>
    </div>
  );
};
