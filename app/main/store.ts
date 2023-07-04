import { create } from "zustand";
import { Store } from "@/types/commons/store";

const useStore = create<Store>((set) => ({
  images: [
    {
      src: "http://via.placeholder.com/640x400", //placeholder
      alt: "Image 1",
    },
    {
      src: "/image2.jpg",
      alt: "Image 2",
    },
    {
      src: "/image3.jpg",
      alt: "Image 3",
    },
  ],
  youtubeMeta: [
    {
      src: "https://www.youtube.com/embed/qpBkMvEyNjc",
      title: "[블루아카이브] 1.5주년 신규 OST [Thanks to] with 윤하",
      thumbnail: "https://i.ytimg.com/vi/qpBkMvEyNjc/hq720.jpg",
      alt: "[블루아카이브] 1.5주년 신규 OST [Thanks to] with 윤하",
      artist: "블루 아카이브",
      tags: [
        "추천게임동영상",
        "추천동영상",
        "블루아카이브",
        "블루아카이브1.5주년",
      ],
    },
    {
      src: "https://www.youtube.com/embed/VzzvtfS4_aE",
      title:
        "블루 아카이브 호시노 콧노래 리믹스 / Blue Archive Hoshino Song (Quilt remix)",
      thumbnail: "https://i.ytimg.com/vi/VzzvtfS4_aE/hq720.jpg",
      alt: "블루 아카이브 호시노 콧노래 리믹스 / Blue Archive Hoshino Song (Quilt remix)",
      artist: "quilt heron",
      tags: ["추천게임동영상", "블루아카이브", "추천동영상"],
    },
  ],
  platformList: [
    { value: "steam", name: "Steam" },
    { value: "origin", name: "Origin" },
  ],
  sortByList: [
    {
      value: "MP",
      name: "Most Played",
    },
    {
      value: "NR",
      name: "New Release",
    },
    {
      value: "TS",
      name: "Top Seller",
    },
  ],
}));

export default useStore;
