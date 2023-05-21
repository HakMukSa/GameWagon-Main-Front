"use client";
export class LoginValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LoginValidationError";
  }
}
