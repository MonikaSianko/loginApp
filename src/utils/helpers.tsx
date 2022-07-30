// VARIABLES

export const TOKEN = "TOKEN";
export const LOGIN_URL = "/";
export const AUTH_USER_URL = "/authUser";
export const EMAIL = "email";
export const USER_NAME = "userName";
export const PASSWORD = "password";

// FUNCTIONS

export const isBetween = (n: number, a: number, b: number): boolean => {
  return (n - a) * (n - b) <= 0;
};
