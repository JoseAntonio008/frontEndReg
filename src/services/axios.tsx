import axios from "axios";
import { FormDataType } from "../constant";

export const apiService = axios.create({
  baseURL: "http://localhost:5000",
});

export const protectedService = axios.create({
  baseURL: "http://localhost:5000",
});

protectedService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const submitForm = async (formData: FormDataType): Promise<any> => {
  try {
    const response = await apiService.post(
      "/api/student/submitProfiling",
      formData
    );
    console.log("Form submitted successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error submitting form:",
      error.response?.data || error.message
    );
    throw error;
  }
};
