import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { HttpClient } from "./http";

export const useCreateAccount = () =>
  useMutation({
    mutationFn: (data) => HttpClient.post({ url: "/user", data }),
    onSuccess: (res) => console.log("User created", { res }),
    onError: (err) => console.log("Error", { err }),
  });
