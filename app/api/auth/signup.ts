import { SignUp } from "@/signup/type";
import gameWagon from "@/api/commons/axios";
import { SignupValidationError } from "@/signup/error";
import axios, { HttpStatusCode } from "axios";
export const signupRequest = async (
  userId: string,
  nickname: string,
  email: string,
  password: string,
  confirmPassword: string,
  allowMarketing: boolean
): Promise<SignUp> => {
  try {
    const { data } = await gameWagon().post<SignUp>("/auth/signup", {
      userId: userId,
      nickname: nickname,
      email: email,
      password: password,
      confirmedPassword: confirmPassword,
      allowMarketing: allowMarketing,
    });
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error) === false) {
      throw error;
    }
    if (error.response.status !== HttpStatusCode.UnprocessableEntity) {
      throw error;
    }
    const errorMessages = error.response.data.messages;
    const errorKeys = Object.keys(errorMessages);
    throw new SignupValidationError(errorMessages[errorKeys[0]][0]);
  }
};
