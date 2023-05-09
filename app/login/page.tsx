"use client";
import { useState } from "react";
import { LoginProcess } from "@/api/auth/login";

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

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: BaseSyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await LoginProcess(id, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          계정에 로그인하기
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          회원이 아니신가요?{" "}
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            회원가입하러가기
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-white"
              >
                아이디
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
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                비밀번호
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
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-indigo-500"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
