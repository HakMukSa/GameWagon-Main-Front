export type Store = {
  images: Image[];
  youtubeMeta: YoutubeMeta[];
};
export type Image = {
  src: string;
  alt: string;
};
export type YoutubeMeta = {
  src: string;
  title: string;
  thumbnail: string;
  alt: string;
  artist: string;
  tag: string;
};
