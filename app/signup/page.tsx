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
          회원가입
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
                아이디 <span className="text-[#ff0000]">*</span>{" "}
                <span>(영어 대소문자, 숫자 포함 )</span>
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
              <div className="mt-1 flex">
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
                  value={nickname}
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
