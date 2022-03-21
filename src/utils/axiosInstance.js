import axios from "axios";

console.log("baseUrl", process.env.REACT_APP_API_URL);

const axioss = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axioss.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axioss;
