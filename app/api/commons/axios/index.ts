import axios from "axios";

export default function gameWagon() {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_GAME_WAGON_MAIN_API}/api`,
  });
  instance.defaults.timeout = 5000; // 5s

  console.log(instance); // 걍 확인용
  return instance;
}
