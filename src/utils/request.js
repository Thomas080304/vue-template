import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "/api",
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    config.headers["X-Token"] = "xxx-xxx-xxx";
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
