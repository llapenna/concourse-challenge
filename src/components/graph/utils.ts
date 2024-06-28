import { Intensity, Activity } from "@/types/activity";

export const calculateIntensity = (max: number, n: number): Intensity => {
  if (n === 0) return Intensity.Empty;
  if (n >= max) return Intensity.Full;

  const scale = max / 4;
  // By ceiling the value, we ensure that the intensity is within bounds of the enum
  return Math.ceil(n / scale);
};

export const getDayFromWeeks = (data: Activity[], dayIndex: number) => {
  return data.map((w) => ({ week: w.week, day: w.days[dayIndex] }));
};
