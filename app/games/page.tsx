"use client";
import { gameList100 } from "@/api/game/games-game-list";
import { useState, useEffect } from "react";
import { GameRanking, Platform, SortBy } from "@/types/commons/gamelist";
import useStore from "@/main/store";
import {
  GameImage,
  GameImageSkeleton,
} from "@/components/commons/Games/GameImage";
import { PlatformList, SortByList } from "@/types/commons/store";

export default function Games(): JSX.Element {
  const { platformList, sortByList } = useStore();
  const [games, setGames] = useState<GameRanking[]>([]);
  const [platform, setPlatform] = useState<Platform>("steam"); // default: steam
  const [sortBy, setSortBy] = useState<SortBy>("MP"); // default: MP
  const [perPage, setPerPage] = useState<number>(10); //default: 10
  const [page, setPage] = useState<number>(1); // default: 1

  const handleChangePlatform = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedPlatform: Platform = event.target.value as Platform;
    setPlatform(selectedPlatform);
  };
  const handleChangeSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy: SortBy = event.target.value as SortBy;
    setSortBy(selectedSortBy);
  };

  useEffect(() => {
    const getGameRanking = async () => {
      const gameRanking10 = await gameList100(platform, sortBy, perPage, page);
      setGames(gameRanking10.rankings);
    };
    getGameRanking();
  }, [platform, sortBy]);

  return (
    <div className="w-full h-[100%] bg-[#000000] color-white">
      <div className="w-[65%] bg-[#111827] h-[1200px] mx-auto ring-2">
        <div className="w-[100%] h-[30px] flex">
          <select
            name="platform"
            id="platform_dropdown"
            className="text-black w-[30%]"
            onChange={handleChangePlatform}
          >
            {platformList.map<JSX.Element>((i: PlatformList) => (
              <option value={i.value} key={i.value}>
                {i.name}
              </option>
            ))}
          </select>
          <select
            name="sortBy"
            id="sortBy_dropdown"
            className="text-black w-[20%] ml-[300px]"
            onChange={handleChangeSortBy}
          >
            {sortByList.map<JSX.Element>((i: SortByList) => (
              <option value={i.value} key={i.value}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[100%] mt-[50px] flex">
          {games.length > 0
            ? games
                .slice(0, 5)
                .map<JSX.Element>((game: GameRanking) => (
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
        <div className="w-[100%] mt-[50px] flex">
          {games.length > 0
            ? games
                .slice(5, 10)
                .map<JSX.Element>((game: GameRanking) => (
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
  );
}
