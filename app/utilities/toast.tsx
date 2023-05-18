import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const error = (message: string) => {
  toast.error(`${message}`, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
