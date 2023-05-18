export type Toast = {
  type?: "success" | "error" | "info" | "warning";
  message: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left"
    | "top-right";
};
