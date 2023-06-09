import gameWagon from "@/api/commons/axios";
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { SortBy, Platform, GameListRankings } from "@/types/commons/gamelist";

export async function gameList10(
  platform: Platform,
  sortBy: SortBy
): Promise<GameListRankings> {
  try {
    const { data }: AxiosResponse<GameListRankings> = await gameWagon().get(
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
    throw axiosError;
  }
}
