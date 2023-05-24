"use client";
import { RefObject } from "react";
export class LoginValidationError extends Error {
  public field?: RefObject<HTMLInputElement>;
  constructor(message: string, field?: RefObject<HTMLInputElement>) {
    super(message);
    this.name = "LoginValidationError";
    if (field) {
      this.field = field;
    }
  }
}
