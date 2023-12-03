import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "./http";
import CustomToast from "@/components/CustomToast";

export const useGetAllPosts = () =>
  useQuery({
    queryFn: () => HttpClient.get({ url: "/post" }),
    queryKey: ["all_posts"],
  });

export const useGetSinglePost = ({ id }) =>
  useQuery({
    queryFn: () => HttpClient.get({ url: `/post/${id}` }),
    queryKey: ["single_post", id],
    enabled: !!id,
  });

export const usePostComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ post_id, ...rest }) =>
      HttpClient.post({ url: `/post/${post_id}/comment`, data: rest }),
    onSuccess: (res) => {
      CustomToast({ message: res.message, type: "success" });
      queryClient.refetchQueries(["single_post"]);
    },
    onError: (err) => {
      CustomToast({ message: err.message, type: "error" });
    },
  });
};
