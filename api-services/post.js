import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "./http";

export const useGetAllPosts = () =>
  useQuery({
    queryFn: () => HttpClient.get({ url: "/post" }),
    queryKey: ["all_posts"],
  });

export const useGetSinglePost = ({ id }) =>
  useQuery({
    queryFn: () => HttpClient.get({ url: `/post/${id}` }),
    queryKey: ["single_post"],
    enabled: !!id,
  });
