"use client";
import useStore from "@/main/store";
import Slick from "@/components/commons/Slick";
import Youtube from "@/components/index/Youtube";
import { gameList } from "@/api/game/game-list";
import { useState, useEffect, ReactElement } from "react";
import { GameList } from "./types/commons/gamelist";
import {
  GameImage,
  GameImageSkeleton,
} from "./components/commons/Games/GameImage";

export default function Home(): JSX.Element {
  const { images } = useStore();
  const [games, setGames] = useState<GameList | {} | any>({});
  useEffect(() => {
    const getGameRanking = async () => {
      const gameRanking10 = await gameList("steam", "MP");
      setGames(gameRanking10.rankings);
    };
    getGameRanking();
  }, []);
  console.log(games);

  return (
    <div className="w-full h-[250vh] bg-[#000000] color-white">
      <div className="w-[65%] bg-[#111827] h-[250vh] mx-auto">
        {/* section 01: 게임 & 하드웨어 정보 광고 배너 */}
        <div id="section 01">
          <div className="w-[80%] h-[400px] mx-auto border-2 border-pink-500 border-solid">
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
        <div id="section 03" className="mt-[50px] w-[80%] mx-auto">
          <div className="">section 03: 게임 세일 항목</div>
          <div className="w-[100%] h-[500px] mt-[50px]">
            <>
              <div className="flex justify-around">
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[0]?.name}
                    image={games[0]?.game.images[0]}
                    link={games[0]?.game.gameUrl}
                    title={games[0]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[1]?.name}
                    image={games[1]?.game.images[0]}
                    link={games[1]?.game.gameUrl}
                    title={games[1]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[2]?.name}
                    image={games[2]?.game.images[0]}
                    link={games[2]?.game.gameUrl}
                    title={games[2]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[3]?.name}
                    image={games[3]?.game.images[0]}
                    link={games[3]?.game.gameUrl}
                    title={games[3]?.game.name}
                  />
                )}
              </div>
              <div className="flex justify-around mt-[50px]">
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[4]?.name}
                    image={games[4]?.game.images[0]}
                    link={games[4]?.game.gameUrl}
                    title={games[4]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[5]?.name}
                    image={games[5]?.game.images[0]}
                    link={games[5]?.game.gameUrl}
                    title={games[5]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[6]?.name}
                    image={games[6]?.game.images[0]}
                    link={games[6]?.game.gameUrl}
                    title={games[6]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[7]?.name}
                    image={games[7]?.game.images[0]}
                    link={games[7]?.game.gameUrl}
                    title={games[7]?.game.name}
                  />
                )}
              </div>
              <div className="flex justify-around mt-[50px]">
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[8]?.name}
                    image={games[8]?.game.images[0]}
                    link={games[8]?.game.gameUrl}
                    title={games[8]?.game.name}
                  />
                )}
                {Object.keys(games).length === 0 ? (
                  <GameImageSkeleton />
                ) : (
                  <GameImage
                    key={games[9]?.name}
                    image={games[9]?.game.images[0]}
                    link={games[9]?.game.gameUrl}
                    title={games[9]?.game.name}
                  />
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
