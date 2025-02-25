import axios from "axios";

export const apiService = axios.create({
  baseURL: "http://localhost:4000",
});

export const protectedService = axios.create({
  baseURL: "http://localhost:4000",
});

protectedService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const submitForm = async (formData:FormData):Promise<any> => {
  try {
    const response = await apiService.post("/submitProfiling",formData)
    console.log("Form submitted successfully:", response.data);
    return response.data;
  } catch (error:any) {
    console.error("Error submitting form:", error.response?.data || error.message);
    throw error;
  }
}