"use client";
export class SignupValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LoginValidationError";
  }
}
