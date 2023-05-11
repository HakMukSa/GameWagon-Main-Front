import { Signup } from "@/api/commons/types/signup";
import gameWagon from "@/api/commons/axios";

export const SignupProcess = async (
  userId: string,
  nickname: string,
  email: string,
  password: string,
  confirmPassword: string,
  allowMarketing: boolean
): Promise<Signup> => {
  const { data } = await gameWagon().post<Signup>("/auth/signup", {
    userId: userId,
    nickname: nickname,
    email: email,
    password: password,
    confirmedPassword: confirmPassword,
    allowMarketing: allowMarketing,
  });
  return data;
};
