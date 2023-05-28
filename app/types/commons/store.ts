export type Store = {
  images: ImageList[];
  youtube: YoutubeList[];
};

export type Images = {
  images: ImageList[];
};
export type ImageList = {
  src: string;
  alt: string;
};
export type Youtube = {
  list: YoutubeList[];
};
export type YoutubeList = {
  src: string;
  title: string;
  thumbnail: string;
  alt: string;
};
