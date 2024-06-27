import { RawActivity } from "@/types/activity";
import { MONTHS } from "@/utils/constants";

import { monthsAxis } from "../styles";

const getMonth = (timestamp: number) => new Date(timestamp * 1000).getMonth();
const monthToString = (timestamp: number) => MONTHS[getMonth(timestamp)].short;

interface Props {
  activity: RawActivity[];
}
export const TableHeader = ({ activity }: Props) => {
  return (
    <thead>
      <tr>
        {/* Empty cell to reserve space for the days axis */}
        <th></th>
        {activity.map((w, weekIndex) => (
          <th className={monthsAxis()}>
            {weekIndex === 0 && monthToString(w.week)}
            {weekIndex > 0 &&
              getMonth(activity[weekIndex - 1].week) !== getMonth(w.week) &&
              monthToString(w.week)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
