import { create } from "zustand";
import { Images } from "@/types/commons/image-list";
/** @todo images외부 이미지 허용하도록 설정 */
// interface Image {
//   src: string;
//   alt: string;
// }
// interface Images {
//   images: Image[];
// }
const useStore = create<Images>((set) => ({
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
}));

export default useStore;
