import axios from "axios";

const endpoint = "http://localhost:8000/api";

const api = axios.create({
  baseURL: endpoint,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    // console.error("GET request failed:", error);
    throw error;
  }
};

export const post = async (url, data, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    // console.error("POST request failed:", error);
    throw error;
  }
};

export const put = async (url, data, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    // console.error("PUT request failed:", error);
    throw error;
  }
};

export const del = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    // console.error("DELETE request failed:", error);
    throw error;
  }
};
