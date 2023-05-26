"use client";
import { useState, useRef } from "react";
import { loginRequest } from "@/api/auth/login";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BaseSyntheticEvent } from "@/types/commons/async-event";
import { LoginValidationError } from "@/login/error";
import { error as showError } from "@/utilities/toast";
import { throwIfEmpty } from "@/utilities/exception";

export default function Login(): JSX.Element {
  const router = useRouter();
  // input state
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // input isCorrect
  const [idIsCorrect, setIdIsCorrect] = useState(true);
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
  // input ref
  const idInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    event.preventDefault();
    try {
      throwIfEmpty(
        id,
        new LoginValidationError("사용자 ID는 필수 항목입니다.", idInputRef)
      );
      throwIfEmpty(
        password,
        new LoginValidationError(
          "비밀번호는 필수 항목입니다.",
          passwordInputRef
        )
      );
      const response = await loginRequest(id, password);
      /**@todo 로그인 후처리 */
      router.push("/");
    } catch (error: any) {
      if (error instanceof LoginValidationError === false) {
        throw error;
      }
      showError(error.message);
<<<<<<< HEAD
      console.log(error.field);
=======
>>>>>>> 6b4da7abd97ba7f2bd472b93c7eb6e4a27062927
      error?.field?.current.focus();
      handleErrorInput(error.field?.current.id);
    }
  };

  const handleErrorInput = (field: string): void => {
    switch (field) {
      case "id":
        setIdIsCorrect(false);
        break;
      case "password":
        setPasswordIsCorrect(false);
        break;
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "id":
        setId(value);
        setIdIsCorrect(value !== "");
        break;
      case "password":
        setPassword(value);
        setPasswordIsCorrect(value !== "");
        break;
    }
  };

  return (
    <div className="bg-[#000000]">
      <div className="w-[65%] mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <ToastContainer />
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
                    type="text"
                    autoComplete="id"
                    required
                    value={id}
                    onChange={handleInputChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                      idIsCorrect ? "" : "border-red-500 focus:border-red-500"
                    }`}
                    ref={idInputRef}
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
                    onChange={handleInputChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                      passwordIsCorrect
                        ? ""
                        : "border-red-500 focus:border-red-500"
                    }`}
                    ref={passwordInputRef}
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
    </div>
  );
}
