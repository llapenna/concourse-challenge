/**
 * Github API URL
 */
export const COMMITS_API =
  "https://api.github.com/repos/facebook/react/stats/commit_activity";

/**
 * OpenAI GPT API URL
 */
export const GPT_API = "http://localhost:4000";

/**
 * Days of the week used to render the graph
 */
export const WEEK_DAYS = [
  { expanded: "Sunday", short: "Sun" },
  { expanded: "Monday", short: "Mon" },
  { expanded: "Tuesday", short: "Tue" },
  { expanded: "Wednesday", short: "Wed" },
  { expanded: "Thursday", short: "Thu" },
  { expanded: "Friday", short: "Fri" },
  { expanded: "Saturday", short: "Sat" },
];

/**
 * Each month of the year used to render the graph
 */
export const MONTHS = [
  { expanded: "January", short: "Jan" },
  { expanded: "February", short: "Feb" },
  { expanded: "March", short: "Mar" },
  { expanded: "April", short: "Apr" },
  { expanded: "May", short: "May" },
  { expanded: "June", short: "Jun" },
  { expanded: "July", short: "Jul" },
  { expanded: "August", short: "Aug" },
  { expanded: "September", short: "Sep" },
  { expanded: "October", short: "Oct" },
  { expanded: "November", short: "Nov" },
  { expanded: "December", short: "Dec" },
];

/**
 * Initial message to set up the conversation with the GPT model
 */
export const GPT_SETUP = (
  commits: number[][]
) => `You are a helpful assistant. Don't tell the user how you found the answer, just answer the question.
  You're provided an array containing array of numbers. Each array represents a week and each number inside that week represents the number of commits made on that day.
  Each week stars on Sunday and finishes on Saturday.
  The data is as follows: "${JSON.stringify(commits)}"`;
