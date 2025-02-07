import axios from "axios";

export const apiService = axios.create({
  baseURL: "localhost:4000",
});

export const protectedService = axios.create({
  baseURL: "localhost:4000",
});

protectedService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
