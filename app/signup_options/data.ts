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

/*
                <option value="FHD">FHD (1920 x 1080)</option>
                <option value="FHD_PLUS">FHD+ (2460 x 1080)</option>
                <option value="WFHD">WFHD (2560 x 1080)</option>
                <option value="DFHD">DFHD (3840 x 1080)</option>
                <option value="WUXGA">WUXGA (1920 X 1200)</option>
                <option value="QHD">QHD (2560 x 1440)</option>
                <option value="QHD_PLUS">QHD+ (3200 x 1440)</option>
                <option value="WQHD">WQHD (3440 X 1440)</option>
                <option value="DQHD">DQHD (5120 X 1440)</option>
                <option value="WQXGA">WQXGA (2560 x 1600)</option>
                <option value="WQHD_PLUS">WQHD+ (3840 x 1600)</option>
                <option value="4K">4K UHD / UHD (3840 x 2160)</option>
                <option value="4K_DCI">4K DCI (4096 x 2160)</option>
                <option value="WUHD">WUHD / UHD+ (5120 x 2160)</option>
                <option value="8K">8K UHD / FUHD (7680 x 4320)</option>
*/
