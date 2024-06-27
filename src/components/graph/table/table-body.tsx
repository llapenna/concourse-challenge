import { RawActivity } from "@/types/activity";
import { WEEK_DAYS } from "@/utils/constants";

import { daysAxis } from "../styles";
import { calculateIntensity, getDayFromWeeks } from "../utils";
import { Day } from "../day";

interface Props {
  activity: RawActivity[];
  max: number;
}
export const TableBody = ({ activity, max }: Props) => {
  const isOdd = (n: number) => n % 2 !== 0;

  return (
    <tbody>
      {WEEK_DAYS.map((day, dayIndex) => (
        <tr key={day.short}>
          <th className={daysAxis()}>{isOdd(dayIndex) && day.short}</th>

          {getDayFromWeeks(activity, dayIndex).map((d) => (
            <Day
              intensity={calculateIntensity(max, d)}
              day={day.short}
              count={d}
            ></Day>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
