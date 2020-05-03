import axios from "axios";

const axiosNoTokenRequest = axios.create({
  baseURL: "http://ev-reg-sys.herokuapp.com/",
  data: {}
});

export { axiosNoTokenRequest };
