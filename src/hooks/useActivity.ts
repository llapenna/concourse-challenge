import { RawActivity } from "@/types/activity";
import { COMMITS_API } from "@/utils/constants";
import { useMemo } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useActivity = () => {
  const { data, error, isLoading } = useSWR<RawActivity[]>(
    COMMITS_API,
    fetcher
  );

  const parsedData = useMemo(() => {
    if (!data) return null;

    // TODO: Transform/map this data so it can be used easily in the Activity component
    return data;
  }, [data]);

  return {
    data: parsedData,
    error,
    isLoading,
  };
};
