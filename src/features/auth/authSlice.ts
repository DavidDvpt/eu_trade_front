import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiStatusEnum } from "../axios/axiosFiles/apiTypes";
import { loginThunk } from "./authThunk";

const initialState: AuthState = {
  isLogged: false,
  token: { status: ApiStatusEnum.IDLE, result: null },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.token.status = ApiStatusEnum.PENDING;
        state.isLogged = false;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.token.status = ApiStatusEnum.IDLE;
        state.token.result = action.payload;
        state.isLogged = true;
        state.token.error = undefined;
      })
      .addCase(loginThunk.rejected, (state, action: PayloadAction<any>) => {
        state.token.status = ApiStatusEnum.REJECTED;
        state.token.result = null;
        state.isLogged = false;
        state.token.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const getAuthState = (state: RootState) => state.auth;
