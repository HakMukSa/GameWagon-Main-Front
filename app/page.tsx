"use client";
import useStore from "@/main/store";
import Slick from "@/components/commons/Slick";
import Youtube from "@/components/index/Youtube";

export default function Home(): JSX.Element {
  const { images, youtubeMeta } = useStore();
  return (
    <div className="w-full h-[150vh] bg-[#000000] color-white">
      <div className="w-[65%] bg-[#111827] h-[150vh] mx-auto">
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
            <Youtube list={youtubeMeta} />
          </div>
        </div>

        {/* section 03: 게임 세일 항목 */}
        <div id="section 03" className="mt-[50px] flex w-[80%] mx-auto">
          <div className="">section 03: 게임 세일 항목 (귀찮아서 나중)</div>
        </div>
      </div>
    </div>
  );
}
