import { SignUp } from "@/signup/signup";
import gameWagon from "@/api/commons/axios";

export const signupRequest = async (
  userId: string,
  nickname: string,
  email: string,
  password: string,
  confirmPassword: string,
  allowMarketing: boolean
): Promise<SignUp> => {
  const { data } = await gameWagon().post<SignUp>("/auth/signup", {
    userId: userId,
    nickname: nickname,
    email: email,
    password: password,
    confirmedPassword: confirmPassword,
    allowMarketing: allowMarketing,
  });
  return data;
};
