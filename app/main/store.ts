import { create } from "zustand";
/** @todo images외부 이미지 허용하도록 설정 */
interface image {
  src: string;
  alt: string;
}
interface images {
  images: image[];
}
const useStore = create<images>((set) => ({
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
