"use client";
import { useState } from "react";

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

export default function SignupPage() {
  // 필수사항
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 선택사항

  // PC 사양
  const [mainboard, setMainboard] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [ram, setRam] = useState("");

  // 선호하는 플랫폼
  const [platform, setPlatform] = useState([""]);

  // 선호하는 게임 장르
  const [genre, setGenre] = useState([""]);

  const handleEmailChange = (event: BaseSyntheticEvent) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: BaseSyntheticEvent) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: BaseSyntheticEvent) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    // TODO: 회원가입 로직 구현
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Create your Account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-white"
              >
                아이디 <span className="text-[#ff0000]">*</span>
                {/*필수사항*/}
              </label>
              <div className="mt-1">
                <input
                  id="id"
                  name="id"
                  type="id"
                  autoComplete="id"
                  required
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                이메일 <span className="text-[#ff0000]">*</span>
                {/*필수사항*/}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm font-medium text-white"
              >
                닉네임 <span className="text-[#ff0000]">*</span>
                {/*필수사항*/}
              </label>
              <div className="mt-1">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  autoComplete="nickname"
                  required
                  value={email}
                  onChange={(event) => setNickname(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                비밀번호 <span className="text-[#ff0000]">*</span>
                {/*필수사항*/}
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-white"
              >
                비밀번호 확인 <span className="text-[#ff0000]">*</span>
                {/*필수사항*/}
              </label>
              <div className="mt-1">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <br />
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
              <label
                htmlFor="text"
                className="block text-sm font-medium text-white"
              >
                램 용량(GB)
              </label>
              <div className="mt-1">
                <input
                  id="ram"
                  name="ram"
                  type="number"
                  value={ram}
                  autoComplete="ram"
                  onChange={(event) => setRam(event.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                />
              </div>
            </div>
            <div>
              모니터 해상도
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black">
                <option value=""></option>
                <option value="FHD">FHD (1920 x 1080)</option>
                <option value="FHD+">FHD+ (2460 x 1080)</option>
                <option value="WFHD">WFHD (2560 x 1080)</option>
                <option value="DFHD">DFHD (3840 x 1080)</option>
                <option value="WUXGA">WUXGA (1920 X 1200)</option>
                <option value="QHD">QHD (2560 x 1440)</option>
                <option value="QHD+">QHD+ (3200 x 1440)</option>
                <option value="WQHD">WQHD (3440 X 1440)</option>
                <option value="DQHD">DQHD (5120 X 1440)</option>
                <option value="WQXGA">WQXGA (2560 x 1600)</option>
                <option value="WQHD+">WQHD+ (3840 x 1600)</option>
                <option value="4K">4K UHD / UHD (3840 x 2160)</option>
                <option value="4K DCI">4K DCI (4096 x 2160)</option>
                <option value="WUHD">WUHD / UHD+ (5120 x 2160)</option>
                <option value="8K">8K UHD / FUHD (7680 x 4320)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                </svg>
              </div>
            </div>

            <br />
            <p>선호하는 게임 플랫폼(선택사항)</p>

            <br />
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-indigo-500"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
