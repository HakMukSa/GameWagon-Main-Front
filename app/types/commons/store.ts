export type Store = {
  images: ImageList[];
  youtubeMeta: YoutubeMeta[];
};

export type Images = {
  images: ImageList[];
};
export type ImageList = {
  src: string;
  alt: string;
};
export type Youtube = {
  list: YoutubeMeta[];
};
export type YoutubeMeta = {
  src: string;
  title: string;
  thumbnail: string;
  alt: string;
};
