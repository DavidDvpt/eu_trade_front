import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isLogged: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  // extraReducers: (builder) => {
  //   builder.addCase();
  // },
});

export default authSlice.reducer;
export const getAuthState = (state: RootState) => state.auth;
