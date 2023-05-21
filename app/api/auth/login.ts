import gameWagon from "@/api/commons/axios";
import { LoginValidationError } from "@/login/error";
import { User } from "@/types/commons/user";
import axios from "axios";
import { HttpStatusCode } from "axios";
export async function loginRequest(
  userId: string,
  password: string
): Promise<User> {
  try {
    const { data } = await gameWagon().post<User>("/auth/login", {
      userId: userId,
      password: password,
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
    throw new LoginValidationError(errorMessages[errorKeys[0]][0]);
  }
}
