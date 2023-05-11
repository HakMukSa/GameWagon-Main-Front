import gameWagon from "@/api/commons/axios";
import { User } from "@/api/commons/types/user";
export async function LoginProcess(
  userId: string,
  password: string
): Promise<User> {
  const { data } = await gameWagon().post<User>("/auth/login", {
    userId: userId,
    password: password,
  });
  return data;
}
