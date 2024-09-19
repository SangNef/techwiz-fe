import { get } from "./index";

export const getHomeScreen = async () => {
  const url = "/home-screen";
  return get(url);
};
