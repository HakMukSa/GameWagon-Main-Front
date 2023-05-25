"use client";
import { RefObject } from "react";
export class SignupValidationError extends Error {
  public field?: RefObject<HTMLInputElement>;
  constructor(message: string, field?: RefObject<HTMLInputElement>) {
    super(message);
    this.name = "SignupValidationError";
    if (field) {
      this.field = field;
    }
  }
}
