import { create } from "zustand";

const useStore = create((set) => ({
  images: [
    {
      src: "/image1.jpg",
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
