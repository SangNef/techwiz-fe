import { get } from "./index";

export const getDestinations = async () => {
  return await get("/destination");
};

export const getDestination = async (id) => {
  return await get(`/destination/${id}`);
};
