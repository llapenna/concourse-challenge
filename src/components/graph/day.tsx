import { day as dayStyles } from "./styles";

interface Props {
  intensity?: 0 | 1 | 2 | 3 | 4;
  as?: "td" | "div";
  day?: string;
  count?: number;
}
export const Day = ({ intensity = 0, as = "td", day, count }: Props) => {
  const classes = dayStyles({ intensity });
  const Component = as;

  return (
    <Component className={classes.box}>
      {day && count && (
        <div className={classes.tooltip}>
          <span>{day}</span>
          <span>|</span>
          <span>{count}</span>
        </div>
      )}
    </Component>
  );
};
