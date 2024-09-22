import { get } from "./index";

export const getAllCurrencies = async () => {
  return await get("/currency");
};
