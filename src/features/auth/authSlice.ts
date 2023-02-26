import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
export const getAuthState = (state: RootState) => state.auth;
