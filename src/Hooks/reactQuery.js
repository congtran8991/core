import { useQuery } from "@tanstack/react-query";

export const useReactQuery = () => {
  const { data: dataRQuery, ...rest } = useQuery({
    queryKey: ["todo", 5],
    queryFn: (id) => {
        console.log("ID", id);
        return [{ key: Math.random() }]
    },
    initialData: [{ key: 1 }],
    refetchOnReconnect: true,
    refetchOnMount: false,
    staleTime: 1000,
    cacheTime: 100000,
    keepPreviousData: true
    // enabled: false
  });
  return {
    dataRQuery,
    ...rest,
  };
};

export const useReactQuery1 = () => {
    const { data: dataRQuery, ...rest } = useQuery({
      queryKey: ["todo1", 5],
      // queryFn: (id) => {
      //     console.log("ID", id);
      //     return [{ key: 2 }]
      // },
      initialData: [{ key: 3 }],
      refetchOnMount: true,
      enabled: false
    });
    return {
      dataRQuery,
      ...rest,
    };
  };
