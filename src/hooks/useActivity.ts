import { Activity } from "@/types/activity";
import { COMMITS_API } from "@/utils/constants";
import { useMemo } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getMaxIntensity = (data: Activity[]) => {
  const allContributions = data.flatMap((w) => w.days);
  return Math.max(...allContributions);
};

export const useActivity = () => {
  const { data, error, isLoading } = useSWR<Activity[]>(COMMITS_API, fetcher);

  const parsedData = useMemo(() => {
    if (!data) return null;

    return data;
  }, [data]);

  return {
    data: parsedData,
    max: getMaxIntensity(parsedData ?? []),
    error,
    isLoading,
  };
};
