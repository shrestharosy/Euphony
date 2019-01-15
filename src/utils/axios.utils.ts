import axios from "axios";
import { CONFIG } from "../config";

// const API_KEY = CONFIG.YOUTUBE_API_KEY;

const instance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // key: API_KEY
  },

  timeout: 0
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.code === "ECONNABORTED") {
      alert("Request Time Out. Please try again");
    }
    if (typeof error === "undefined") {
      // when backend server is not available at all
      alert(
        "We cannot seem to reach our servers. Please check your internet connection and try again"
      );
      return Promise.reject(error);
    } else if (typeof error.response === "undefined") {
      // when request is timeout
      alert(
        "We cannot seem to reach our servers. Please check your internet connection and try again"
      );
      return Promise.reject(error.response);
    } else if (error.response.status === 403) {
      // alert("You are not authorized to perform that action");
      return Promise.reject(error.response);
    } else if (error.response.status === 500) {
      alert(
        "Our system is currently facing a problem. Please check back later"
      );

      return Promise.reject(error.response);
    } else {
      // we don't know what's going on
      return Promise.reject(error.response);
    }
  }
);

export default instance;
