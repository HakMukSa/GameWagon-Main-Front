import gameWagon from "@/libs/commons/axios";
import { User } from "@/types/user";
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
