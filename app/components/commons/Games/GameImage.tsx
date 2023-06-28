import Image from "next/image";
import Link from "next/link";

type GameImageProps = {
  image: string;
  link: string;
  title: string;
};
/**
 *@Todo 실제 이미지 적용 후 width, height 조정 필요
 */

export function GameImage(props: GameImageProps) {
  return (
    <div className="w-[20%] h-[100%]">
      <Link href={props.link}>
        <Image
          src={props.image}
          alt={props.title}
          width={680}
          height={480}
        ></Image>
      </Link>
    </div>
  );
}
export function GameImageSkeleton() {
  return (
    <div className="bg-gray-200 animate-pulse w-[200px] h-[200px] rounded-lg opacity-75" />
  );
}
