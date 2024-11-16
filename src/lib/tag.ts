import useSWR from "swr";

export function useTag(tag: string) {
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(`/api/user/${tag}`, fetcher);

  return {
    tags: data,
  };
}
