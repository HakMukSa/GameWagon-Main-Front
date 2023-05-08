import { Signup } from "@/types/signup";
import gameWagon from "../commons/axios";

export const signup = async (
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
// 422 Error

/*
confirmPassword가 왜 필요한가? 프론트에서 비교해서 안맞을 경우 못넘기게 하면 되는거 아닌가?
*/
