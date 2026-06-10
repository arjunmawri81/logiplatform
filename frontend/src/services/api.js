import axios from "axios";

const api = axios.create({
  baseURL: "https://logiplatform-5eyx-git-main-arjunmawri81s-projects.vercel.app/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;