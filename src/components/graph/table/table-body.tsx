import { RawActivity } from "@/types/activity";
import { WEEK_DAYS, MONTHS } from "@/utils/constants";

import { daysAxis } from "../styles";
import { calculateIntensity, getDayFromWeeks } from "../utils";
import { Day } from "../day";

const formatDate = (timestamp: number, dayIndex: number) => {
  const dateObject = new Date(
    timestamp * 1000 + dayIndex * 24 * 60 * 60 * 1000
  );

  const [date] = dateObject.toISOString().split("T");
  const [, month, day] = date.split("-");

  return `${MONTHS[parseInt(month) - 1].short} ${day}`;
};

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
              key={`${d.week}-${d}`}
              intensity={calculateIntensity(max, d.day)}
              day={formatDate(d.week, dayIndex)}
              count={d.day}
            ></Day>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
