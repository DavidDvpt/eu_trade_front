import { LoginInputs } from "@/app/login/page";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { MissingParamsError } from "../axios/axiosFiles/axiosUtils";
import axiosInstance from "../axios/AxiosPublicInstance";

export const loginThunk = createAsyncThunk(
  "auth/authThunk",
  async (params: LoginInputs, { rejectWithValue }) => {
    try {
      const { email, password } = params;
      if (email && password) {
        const result = await axiosInstance().post(`/login`, params);

        return result.data.access_token;
      } else {
        return rejectWithValue(MissingParamsError());
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
