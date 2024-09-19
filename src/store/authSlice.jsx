import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
      const decodedToken = jwtDecode(action.payload.token);
      state.user = {
        id: decodedToken.sub,
        name: decodedToken.name || "Unknown",
        email: decodedToken.email || "Unknown",
      };
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
