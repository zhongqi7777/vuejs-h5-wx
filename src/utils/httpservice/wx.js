import axios from "@/utils/axios/wx";
import { Toast } from "vant";
// import store from '@/store'

let baseURL = process.env.BASE_URL ? process.env.BASE_URL : "";
let baseENV = process.env.BASE_ENV;
baseURL += baseENV;

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
    baseURL: baseURL, // api 的 base_url
    // withCredentials: true, // 跨域请求时发送 cookies
    timeout: 5000 // request timeout
});

export default service;