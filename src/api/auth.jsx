import { post } from "./index";

export const login = async (email, password) => {
  const url = "/login";
  const data = { email, password };
  return post(url, data);
};

export const register = async (name, email, password) => {
  const url = "/register";
  const data = { name, email, password };
  // console.log(data)
  return post(url, data);
}

export const forgotPassword = async (email) => {
  const url = "/forgot-password";
  const data = { email };
  return post(url, data);
}
