import { useActivity } from "@/hooks/useActivity";

import { graph } from "../styles";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";

export const Table = () => {
  const { data, error, isLoading, max } = useActivity();

  // TODO: add proper loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const activity = data ?? [];

  return (
    <div>
      <table className={graph()}>
        <TableHeader {...{ activity }}></TableHeader>
        <TableBody {...{ activity, max }}></TableBody>
      </table>
    </div>
  );
};
