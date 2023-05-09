export interface Options {
  readonly company: string; // 제조사
  readonly generation?: number; // 세대
  readonly name: string; // 제품 이름
  readonly option?: string; // 제품 옵션
  /**
   제품 옵션?
    RYZEN CPU를 예로 들어, 5600과 5600G, 5600X는 차이점이 존재함
    */
}

export interface MonitorOptions {
  readonly resolution: string; // 해상도
  readonly name: string; // 해상도 이름
  readonly value: string; // 데이터
}

// Todo: 메인보드 와꾸

export const cpu: readonly Options[] = [
  { company: "Ryzen", generation: 5, name: "5600", option: "X" },
];

export const gpu: readonly Options[] = [
  { company: "Gigabyte", name: "2060", option: "Super" },
];

export const monitor: readonly MonitorOptions[] = [
  {
    resolution: "1920 X 1080",
    name: "FHD",
    value: "FHD",
  },
];
