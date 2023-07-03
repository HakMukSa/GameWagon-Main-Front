"use client";
import useStore from "@/main/store";
import Slick from "@/components/commons/Slick";
import Youtube from "@/components/index/Youtube";
import { gameList } from "@/api/game/game-list";
import { useState, useEffect } from "react";
import { GameRanking } from "./types/commons/gamelist";
import {
  GameImage,
  GameImageSkeleton,
} from "@/components/commons/Games/GameImage";

export default function Home(): JSX.Element {
  const { images } = useStore();
  const [games, setGames] = useState<GameRanking[]>([]);
  useEffect(() => {
    const getGameRanking = async () => {
      const gameRanking10 = await gameList("steam", "MP");
      setGames(gameRanking10.rankings);
    };
    getGameRanking();
  }, []);

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
