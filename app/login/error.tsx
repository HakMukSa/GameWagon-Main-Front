"use client";
export class LoginValidationError extends Error {
  response?: {
    data: {
      messages: {
        userId?: string;
        password?: string;
      };
    };
  };
}
