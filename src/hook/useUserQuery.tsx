import { getUser, postUser } from "@/api/user";
import { UserType } from "@/mocks/handlers";
import { queryKeys } from "@/types/common";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";

type QueryOptions = Omit<UseQueryOptions<UserType[], AxiosError>, "queryFn" | "queryKey">;

const useUserQuery = (options?: QueryOptions) => {
  const queryClient = useQueryClient();

  const getUserQuery: UseQueryResult<UserType[], AxiosError> = useQuery({
    queryKey: queryKeys.user,
    queryFn: getUser,
    ...options,
  });

  const postUserMutation = useMutation({
    mutationFn: postUser,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.user });
      const previousUser = queryClient.getQueryData<UserType[]>(queryKeys.user);

      if (previousUser) {
        queryClient.setQueryData<UserType[]>(queryKeys.user, (old) => [
          ...(old as UserType[]),
          data,
        ]);
      }
      return { previousUser };
    },
    onError: (error, variables, context) => {
      if (context?.previousUser) {
        queryClient.setQueryData<UserType[]>(queryKeys.user, context.previousUser);
      }
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user });
    },
  });

  return { getUserQuery, postUserMutation };
};

export default useUserQuery;
