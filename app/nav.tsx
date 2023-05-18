import Link from "next/link";
import { ReactElement } from "react";

export default function Nav(): ReactElement {
  return (
    <div className="w-[65%] h-[50px] bg-[#111827] color-white flex mx-auto">
      <Link href="/" className="mr-[50px] ml-[10%]">
        <span className="text-[30px]">게임왜건</span>
      </Link>
      <Link href="/games" className="mr-[50px] my-auto">
        <span className="text-[20px]">게임</span>
      </Link>
      <Link href="/community" className="mr-[50px] my-auto">
        <span className="text-[20px]">커뮤니티</span>
      </Link>
      <Link href="/database" className="my-auto">
        <span className="text-[20px]">데이터베이스</span>
      </Link>
      <Link href="/login" className="absolute right-[30%] top-[1%]">
        <span className="text-[20px]">로그인</span>
      </Link>
    </div>
  );
}
