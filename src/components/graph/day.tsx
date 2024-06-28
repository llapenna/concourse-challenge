import { day as dayStyles } from "./styles";

interface Props {
  intensity?: 0 | 1 | 2 | 3 | 4;
  as?: "td" | "div";
  day: string | null;
  count?: number;
}
export const Day = ({ intensity = 0, as = "td", day, count }: Props) => {
  const classes = dayStyles({ intensity });
  const Component = as;

  const hasData = Boolean(day && count);

  return (
    <Component className={classes.box}>
      {count !== undefined && (
        <div className={classes.tooltip}>
          <span>{day}</span>
          <span>|</span>
          <span>{hasData ? count : 0}</span>
        </div>
      )}
    </Component>
  );
};
