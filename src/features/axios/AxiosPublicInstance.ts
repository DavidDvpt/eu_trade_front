import axios from "axios";
import { setPublicResponseInterceptor } from "./axiosFiles/axiosUtils";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function axiosInstance() {
  const request = axios.create({
    baseURL: API_URL,
    timeout: 30000,
  });

  setPublicResponseInterceptor(request);

  return request;
}
