"use client";
import { useState, useRef } from "react";
import { signupRequest } from "@/api/auth/signup";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent } from "@/types/commons/async-event";
import { throwIfEmpty, throwIf } from "@/utilities/exception";
import { SignupValidationError } from "@/signup/error";
import { error as showError } from "@/utilities/toast";
import { ToastContainer } from "react-toastify";

export default function SignupPage(): JSX.Element {
  const router = useRouter();
  // input state
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [allowMarketing, setAllowMarketing] = useState<boolean>(false);
  // input isCorrect
  const [idIsCorrect, setIdIsCorrect] = useState(true);
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [nicknameIsCorrect, setNicknameIsCorrect] = useState(true);
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
  const [confirmPasswordIsCorrect, setConfirmPasswordIsCorrect] =
    useState(true);
  // input ref
  const idInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nicknameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: BaseSyntheticEvent): Promise<void> => {
    event.preventDefault();
    try {
      throwIfEmpty(
        id,
        new SignupValidationError("사용자 ID는 필수 항목입니다.", idInputRef)
      );
      throwIfEmpty(
        nickname,
        new SignupValidationError(
          "사용자 닉네임은 필수 항목입니다.",
          nicknameInputRef
        )
      );
      throwIfEmpty(
        email,
        new SignupValidationError(
          "사용자 이메일 필수 항목입니다.",
          emailInputRef
        )
      );
      throwIfEmpty(
        password,
        new SignupValidationError(
          "비밀번호는 필수 항목입니다.",
          passwordInputRef
        )
      );
      throwIfEmpty(
        confirmPassword,
        new SignupValidationError(
          "비밀번호 확인은 필수 항목입니다.",
          confirmPasswordInputRef
        )
      );
      throwIf(
        password !== confirmPassword,
        new SignupValidationError(
          "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
          passwordInputRef
        )
      );

      const response = await signupRequest(
        id,
        nickname,
        email,
        password,
        confirmPassword,
        allowMarketing
      );
      router.push("/login");
    } catch (error: any) {
      if (error instanceof SignupValidationError === false) {
        throw error;
      }
      showError(error.message);
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
      case "email":
        setEmailIsCorrect(false);
        break;
      case "nickname":
        setNicknameIsCorrect(false);
        break;
      case "confirm_password":
        setConfirmPasswordIsCorrect(false);
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
      case "email":
        setEmail(value);
        setPasswordIsCorrect(value !== "");
        break;
      case "nickname":
        setNickname(value);
        setNicknameIsCorrect(value !== "");
        break;
      case "confirm_password":
        setConfirmPassword(value);
        setConfirmPasswordIsCorrect(value !== "");
        break;
    }
  };

  return (
    <div className="bg-[#000000]">
      <div className="w-[65%] mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <ToastContainer />
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
                  아이디 <span>(5글자 이상, 최대 15자 이하)</span>
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
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  이메일
                </label>
                <div className="mt-1 flex">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={handleInputChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                      emailIsCorrect
                        ? ""
                        : "border-red-500 focus:border-red-500"
                    }`}
                    ref={emailInputRef}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="nickname"
                  className="block text-sm font-medium text-white"
                >
                  닉네임 <span>(2글자 이상, 10글자 이하)</span>
                </label>
                <div className="mt-1">
                  <input
                    id="nickname"
                    name="nickname"
                    type="text"
                    autoComplete="nickname"
                    required
                    value={nickname}
                    onChange={handleInputChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black
                    ${
                      nicknameIsCorrect
                        ? ""
                        : "border-red-500 focus:border-red-500"
                    }`}
                    ref={nicknameInputRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  비밀번호 <br />
                  <span>
                    (영문 대/소문자, 숫자, 특수문자를 각 1개 이상 포함
                    <br />
                    6글자 이상, 20글자 이하)
                  </span>
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
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black
                    ${
                      passwordIsCorrect
                        ? ""
                        : "border-red-500 focus:border-red-500"
                    }`}
                    ref={passwordInputRef}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium text-white"
                >
                  비밀번호 확인
                </label>
                <div className="mt-1">
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={confirmPassword}
                    onChange={handleInputChange}
                    className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black
                    ${
                      confirmPasswordIsCorrect
                        ? ""
                        : "border-red-500 focus:border-red-500"
                    }`}
                    ref={confirmPasswordInputRef}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="allowMarketing">
                  <input
                    type="checkbox"
                    id="allowMarketing"
                    name="allowMarketing"
                    value="true"
                    onChange={() => setAllowMarketing(!allowMarketing)}
                  />{" "}
                  (선택사항) 이메일 수신 동의
                </label>
              </div>
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
    </div>
  );
}
