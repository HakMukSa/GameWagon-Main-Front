export type Store = {
  images: ImageList[];
  youtubeMeta: YoutubeMeta[];
};
export type ImageList = {
  src: string;
  alt: string;
};
export type YoutubeMeta = {
  src: string;
  title: string;
  thumbnail: string;
  alt: string;
};
