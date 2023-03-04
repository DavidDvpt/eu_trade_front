import { createAsyncThunk } from "@reduxjs/toolkit";
import { MissingParamsError } from "../axios/axiosFiles/axiosUtils";
import axiosInstance from "../axios/AxiosPublicInstance";

export const loginThunk = createAsyncThunk(
  "auth/authThunk",
  async (params: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const { email, password } = params;
      if (email && password) {
        const result = await axiosInstance().post(`/login`, params);

        console.log(result.data.access_token);
        return result.data.access_token;
      } else {
        return rejectWithValue(MissingParamsError());
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
