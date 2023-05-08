import { User } from "@/types/user";
import gameWagon from "../commons/axios";

export const login = async (
  userId: string,
  password: string
): Promise<User> => {
  const { data } = await gameWagon().post<User>("/auth/login", {
    userId: userId,
    password: password,
  });
  return data;
};
