"use client";
import { useState } from "react";
import Block from "./platform_block"; // for platform

type BaseSyntheticEvent<E = object, C = any, T = any> = {
  nativeEvent: E;
  currentTarget: C;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}; // 퍼왔음, 수정해야됨
export default function SignupPage_Options() {
  // PC 사양
  const [mainboard, setMainboard] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  // const [ram, setRam] = useState("");

  // 선호하는 플랫폼
  const [platform, setPlatform] = useState([""]);

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    // TODO: 회원가입 로직 구현
  };

  /** 선호하는 플랫폼 리스트 */
  const platform_list = [
    "Steam",
    "Epic games",
    "Direct Games",
    "Stove indie",
    "Origin",
    "EA",
    "Ubisoft",
    "gog",
    "itch",
    "기타",
  ];
  /** platform_list 항목들 Block형태로 출력 */
  const platforms = () => {
    const result = [];
    for (let i = 0; i < platform_list.length; i++) {
      result.push(<Block platform={platform_list[i]} />);
    }
    return result;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          회원가입 - 선택사항
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <p>사용자 컴퓨터(선택사항)</p>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-white"
              >
                메인보드
              </label>
              <div className="mt-1">
                <input
                  id="mainboard"
                  name="mainboard"
                  type="text"
                  value={mainboard}
                  autoComplete="mainboard"
                  onChange={(event) => setMainboard(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-white"
              >
                CPU
              </label>
              <div className="mt-1">
                <input
                  id="cpu"
                  name="cpu"
                  type="text"
                  value={cpu}
                  autoComplete="cpu"
                  onChange={(event) => setCpu(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-white"
              >
                그래픽카드
              </label>
              <div className="mt-1">
                <input
                  id="gpu"
                  name="gpu"
                  type="text"
                  value={gpu}
                  autoComplete="gpu"
                  onChange={(event) => setGpu(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              모니터 해상도
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black">
                <option value=""></option>
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
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>

            <br />
            <p>선호하는 게임 플랫폼(선택사항)</p>

            <br />

            <div>{platforms()}</div>

            <div>
              <a href="/signup_options">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-indigo-500"
                >
                  회원가입
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
