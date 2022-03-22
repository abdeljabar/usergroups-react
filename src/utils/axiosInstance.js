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
    console.log("error", error);
    if (error.response) {
      if (error.response.status == 401) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

axioss.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log("error", error);
    if (error.response) {
      if (error.response.status == 401) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  }
);

export default axioss;
