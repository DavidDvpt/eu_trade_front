import axios from "axios";
import { setProtectedResponseInterceptor } from "./axiosFiles/interceptorManager";
import { requestInterseptor } from "./axiosFiles/requestInterceptors";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export function axiosTokenInstance() {
  const request = axios.create({
    baseURL: API_URL,
    timeout: 30000,
  });
  request.interceptors.request.use(requestInterseptor);
  setProtectedResponseInterceptor(request);
  return request;
}
