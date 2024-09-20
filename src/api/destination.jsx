import { get } from "./index";

export const getDestinations = async () => {
  return await get("/get-top-destinations");
};
