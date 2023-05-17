export type Toast = {
  type?: string;
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
