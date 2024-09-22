import { del, get, post, put } from "./index";

export const createTrip = async (data) => {
  return await post("/create-trip", data);
};

export const getTripsByUser = async (userId, searchTerm = "") => {
  return await get("/get-trip-by-user", { userId, searchTerm });
};

export const getTrip = async (id) => {
  return await get(`/trip-detail/${id}`);
};

export const updateTrip = async (id, {data}) => {
  console.log('Updating trip with data:', data);
  return await put(`/trip-update/${id}`, data);
};

export const deleteTrip = async (id) => {
  return await del(`/trip-delete/${id}`);
};

export const maskAsCompleted = async (id) => {
  return await put(`/trip-complete/${id}`);
}
