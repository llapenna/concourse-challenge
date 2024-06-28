/**
 * Activity data right from the API
 */
export interface Activity {
  days: number[];
  total: number;
  week: number;
}

/**
 * Scale information used to represent each day's intensity
 */
export enum Intensity {
  Empty = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  Full = 4,
}
