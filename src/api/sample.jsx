import { get } from "./index";

export const getSamples = async () => {
  return await get("/samples");
};
