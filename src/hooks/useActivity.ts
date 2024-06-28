import { RawActivity } from "@/types/activity";
import { COMMITS_API } from "@/utils/constants";
import { useMemo } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getMaxIntensity = (data: RawActivity[]) => {
  const allContributions = data.flatMap((w) => w.days);
  return Math.max(...allContributions);
};

// TODO: add a context to store the data
export const useActivity = () => {
  const { data, error, isLoading } = useSWR<RawActivity[]>(
    COMMITS_API,
    fetcher
  );

  const parsedData = useMemo(() => {
    if (!data) return null;

    // TODO: Transform/map this data so it can be used easily in the Activity component
    // TODO: sort the data to make sure it's ordered by date
    return data;
  }, [data]);

  return {
    data: parsedData,
    max: getMaxIntensity(parsedData ?? []),
    error,
    isLoading,
  };
};
