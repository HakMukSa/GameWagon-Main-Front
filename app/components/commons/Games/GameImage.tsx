import Image from "next/image";
import Link from "next/link";

type GameImageProps = {
  image: string;
  link: string;
  title: string;
};

export default function GameImage(props: GameImageProps) {
  return (
    <div className="w-[20%] h-[100%]">
      <Link href={props.link}>
        <Image
          src={props.image}
          alt={props.title}
          width={640}
          height={480}
        ></Image>
      </Link>
    </div>
  );
}
