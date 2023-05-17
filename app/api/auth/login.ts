import gameWagon from "@/api/commons/axios";
import { User } from "@/types/commons/user";
export async function loginRequest(
  userId: string,
  password: string
): Promise<User> {
  const { data } = await gameWagon().post<User>("/auth/login", {
    userId: userId,
    password: password,
  });
  return data;
}
