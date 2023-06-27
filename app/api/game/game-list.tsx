import gameWagon from "@/api/commons/axios";
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { GetGameList, GameList } from "@/types/commons/gamelist";

export async function gameList(
  platform: string,
  sortBy: "MP" | "NR" | "TS"
): Promise<GameList> {
  try {
    const { data }: AxiosResponse<GameList> = await gameWagon().get(
      `platforms/${platform}/game-list/rankings`,
      {
        params: { sortBy: sortBy },
      }
    );
    return data;
  } catch (error: any) {
    if (!axios.isAxiosError(error)) {
      throw error;
    }
    const axiosError: AxiosError = error;
    if (axiosError.response?.status !== HttpStatusCode.UnprocessableEntity) {
      throw axiosError;
    }
    const errorMessages = error.response?.data.messages;
    throw axiosError;
  }
}
