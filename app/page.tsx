"use client";
import useStore from "@/main/store";
import Slick from "@/components/commons/Slick";
import Youtube from "@/components/index/Youtube";
import { gameList10 } from "@/api/game/index-game-list";
import { useState, useEffect } from "react";
import { GameRanking, SortBy } from "@/types/commons/gamelist";
import {
  GameImage,
  GameImageSkeleton,
} from "@/components/commons/Games/GameImage";
import { PlatformList, SortByList } from "./types/commons/store";

export default function Home(): JSX.Element {
  const { images, platformList, sortByList } = useStore();
  console.log(sortByList);
  const [games, setGames] = useState<GameRanking[]>([]);
  const [platform, setPlatform] = useState<string>("steam"); // default: steam
  const [sortBy, setSortBy] = useState<SortBy>("MP"); // default: MP
  const handleChangePlatform = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPlatform = event.target.value;
    setPlatform(selectedPlatform);
  };
  const handleChangeSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy: SortBy = event.target.value as SortBy;
    setSortBy(selectedSortBy);
  };

  useEffect(() => {
    const getGameRanking = async () => {
      const gameRanking10 = await gameList10(platform, sortBy);
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
              {platformList.map((i: PlatformList) => (
                <option value={i.value}>{i.name}</option>
              ))}
            </select>
            <select
              name="sortBy"
              id="sortBy_dropdown"
              className="text-black w-[20%] ml-[300px]"
              onChange={handleChangeSortBy}
            >
              {sortByList.map((i: SortByList) => (
                <option value={i.value}>{i.name}</option>
              ))}
            </select>
          </div>
          <div className="w-[100%] h-[300px] mt-[50px] flex">
            {games.length > 0
              ? games
                  .slice(0, 5)
                  .map((game: GameRanking) => (
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
                  .map((game: GameRanking) => (
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
