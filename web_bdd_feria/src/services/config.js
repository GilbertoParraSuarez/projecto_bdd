import axios from "axios";

const config = {
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-type": "application/json",
  },
};

export const axiosInstance = axios.create(config);
