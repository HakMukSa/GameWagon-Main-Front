import GameImage from "../commons/Games/GameImage";

export default function GamesRanking(props: any) {
  const data = props.data;
  if (data) {
    return (
      <>
        <div className="flex justify-around">
          <GameImage
            image={data[0].game.images[0]}
            link={data[0].game.gameUrl}
            title={data[0].game.name}
          />
          <GameImage
            image={data[1].game.images[0]}
            link={data[1].game.gameUrl}
            title={data[1].game.name}
          />
          <GameImage
            image={data[2].game.images[0]}
            link={data[2].game.gameUrl}
            title={data[2].game.name}
          />
          <GameImage
            image={data[3].game.images[0]}
            link={data[3].game.gameUrl}
            title={data[3].game.name}
          />
        </div>
        <div className="flex justify-around mt-[50px]">
          <GameImage
            image={data[4].game.images[0]}
            link={data[4].game.gameUrl}
            title={data[4].game.name}
          />
          <GameImage
            image={data[5].game.images[0]}
            link={data[5].game.gameUrl}
            title={data[5].game.name}
          />
          <GameImage
            image={data[6].game.images[0]}
            link={data[6].game.gameUrl}
            title={data[6].game.name}
          />
          <GameImage
            image={data[7].game.images[0]}
            link={data[7].game.gameUrl}
            title={data[7].game.name}
          />
        </div>
        <div className="flex justify-around mt-[50px]">
          <GameImage
            image={data[8].game.images[0]}
            link={data[8].game.gameUrl}
            title={data[8].game.name}
          />
          <GameImage
            image={data[9].game.images[0]}
            link={data[9].game.gameUrl}
            title={data[9].game.name}
          />
        </div>
      </>
    );
  } else {
    <>Load failed</>;
  }
}
