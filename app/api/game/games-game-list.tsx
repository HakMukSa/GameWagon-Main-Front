import gameWagon from "@/api/commons/axios";
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";
import { SortBy, Platform, GameListRankings } from "@/types/commons/gamelist";

export async function gameList100(
  platform: Platform,
  sortBy: SortBy,
  perPage: number,
  page: number
): Promise<GameListRankings> {
  try {
    const { data }: AxiosResponse<GameListRankings> = await gameWagon().get(
      `platforms/${platform}/game-list`,
      {
        params: { sortBy: sortBy, perPage: perPage, page: page },
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
