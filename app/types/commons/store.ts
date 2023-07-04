import { SortBy } from "@/types/commons/gamelist";
export type Store = {
  images: Image[];
  youtubeMeta: YoutubeMeta[];
  platformList: PlatformList[];
  sortByList: SortByList[];
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
  tags: string[];
};
export type PlatformList = {
  value: string;
  name: string;
};
export type SortByList = {
  value: SortBy;
  name: string;
};
