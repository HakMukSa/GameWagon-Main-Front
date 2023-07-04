export type GetGameList = {
  platform: string;
  sortBy: SortBy;
};
export type SortBy = "MP" | "NR" | "TS"; // Most Played | New Release | Top Seller
export type GameImageProps = {
  image: string;
  link: string;
  title: string;
};

export type Game = {
  id: number;
  name: string;
  gameUrl: string;
  price: number;
  discountRate: number;
  releaseDate: string;
  ranking: string;
  platform: string;
  images: string[];
  extraData: {
    languages: [
      {
        language: "string";
        subtitle: boolean;
        dubbing: boolean;
        userPatch: boolean;
      }
    ];
    playTypes: {
      single: boolean;
      multi: boolean;
      online: boolean;
      vr: boolean;
    };
  };
};

export type GameRanking = {
  ranking: number;
  game: Game;
};

export type GameListRankings = {
  rankings: GameRanking[];
};
