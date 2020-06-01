import axios from "axios";

const axiosNoTokenRequest = axios.create({
  baseURL: "https://ev-reg-sys.herokuapp.com",
  data: {}
});

const axiosAuthenticate = axios.create({
  baseURL: "https://fast-lake-47052.herokuapp.com",
  data: {}
});

export { axiosNoTokenRequest, axiosAuthenticate };
