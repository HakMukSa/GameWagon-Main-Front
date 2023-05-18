import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "@/types/commons/toast";

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

function Toastify(props: Toast): any {
  // switch (props.type) {
  //   case undefined:
  //     return toast(`${props.message}`, {
  //       //default
  //       position: props.position ?? "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   case "error":
  //     return toast.error(`${props.message}`, {
  //       position: props.position ?? "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   case "info":
  //     return toast.info(`${props.message}`, {
  //       position: props.position ?? "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   case "success":
  //     return toast.success(`${props.message}`, {
  //       position: props.position ?? "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   case "warning":
  //     return toast.warning(`${props.message}`, {
  //       position: props.position ?? "bottom-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  // }
}
