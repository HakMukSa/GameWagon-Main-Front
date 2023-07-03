"use client";
import useStore from "@/main/store";
import Slick from "@/components/commons/Slick";
import Youtube from "@/components/index/Youtube";
import { gameList } from "@/api/game/game-list";
import { useState, useEffect } from "react";
import { GameList, GameListRanking_Game } from "./types/commons/gamelist";
import {
  GameImage,
  GameImageSkeleton,
} from "./components/commons/Games/GameImage";

export default function Home(): JSX.Element {
  const { images } = useStore();
  const [games, setGames] = useState<GameList | {} | any>({});
  const [platform, setPlatform] = useState<string>("steam"); // default: steam
  const [sortBy, setSortBy] = useState<"MP" | "NR" | "TS">("MP"); // default: MP
  const handleChangePlatform = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPlatform = event.target.value;
    setPlatform(selectedPlatform);
  };
  const handleChangeSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy: "MP" | "NR" | "TS" = event.target.value as
      | "MP"
      | "NR"
      | "TS";
    setSortBy(selectedSortBy);
  };
  useEffect(() => {
    const getGameRanking = async () => {
      const gameRanking10 = await gameList(platform, sortBy);
      setGames(gameRanking10.rankings);
    };
    getGameRanking();
  }, [platform, sortBy]);

  return (
    <div className="w-full h-[250vh] bg-[#000000] color-white">
      <div className="w-[65%] bg-[#111827] h-[250vh] mx-auto">
        {/* section 01: 게임 & 하드웨어 정보 광고 배너 */}
        <div id="section 01">
          <div className="w-[80%] h-[400px] mx-auto ">
            게임 & 하드웨어 정보 광고 배너
            <Slick images={images} />
          </div>
        </div>

        {/* section 02: 게시판 인기글 & 유튜브 */}
        <div id="section 02" className="mt-[50px] flex w-[80%] mx-auto">
          <div className="w-[48%] h-[400px] mr-[10%] border-2 border-blue-500 border-solid">
            게시판 인기글
          </div>
          <div className="w-[48%] bg-[#999999] rounded-lg">
            <Youtube />
          </div>
        </div>

        {/* section 03: 게임 세일 항목 */}
        {/** *@Todo 실제 이미지 적용 후 width, height 조정 필요 */}
        <div id="section 03" className="mt-[50px] w-[80%] mx-auto">
          <div className="">section 03: 게임 세일 항목</div>
          <div className="w-[100%] h-[30px] flex">
            <select
              name="platform"
              id="platform_dropdown"
              className="text-black w-[30%]"
              onChange={handleChangePlatform}
            >
              <option value="steam">Steam</option>
              <option value="origin">Origin</option>
            </select>
            <select
              name="sortBy"
              id="sortBy_dropdown"
              className="text-black w-[20%] ml-[300px]"
              onChange={handleChangeSortBy}
            >
              <option value="MP">Most Played</option>
              <option value="NR">New Release</option>
              <option value="TS">Top Seller</option>
            </select>
          </div>
          <div className="w-[100%] h-[300px] mt-[50px] flex">
            {games.length > 0
              ? games
                  .slice(0, 5)
                  .map((game: GameListRanking_Game) => (
                    <GameImage
                      key={game.game.name}
                      image={game.game.images[0]}
                      link={game.game.gameUrl}
                      title={game.game.name}
                    />
                  ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <GameImageSkeleton key={index} />
                ))}
          </div>
          <div className="w-[100%] h-[300px] mt-[10px] flex">
            {games.length > 0
              ? games
                  .slice(5, 10)
                  .map((game: GameListRanking_Game) => (
                    <GameImage
                      key={game.game.name}
                      image={game.game.images[0]}
                      link={game.game.gameUrl}
                      title={game.game.name}
                    />
                  ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <GameImageSkeleton key={index} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
