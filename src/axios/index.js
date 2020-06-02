import axios from "axios";

const axiosNoTokenInstance = axios.create({
  baseURL: "https://ev-reg-sys.herokuapp.com",
  data: {}
});

const axiosInstance = axios.create({
  baseURL: "https://ev-reg-sys.herokuapp.com",
  data: {},
  headers: {
    Authorization: localStorage.getItem("portalToken")
  }
});

export { axiosNoTokenInstance, axiosInstance };
