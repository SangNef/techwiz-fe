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
      const token = action.payload.token;

      if (!token || token.split('.').length !== 3) {
        console.error("Invalid token format");
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token");
        return;
      }

      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token);

      try {
        const decodedToken = jwtDecode(token);
        state.user = {
          id: decodedToken.sub,
          name: decodedToken.name || "Unknown",
          email: decodedToken.email || "Unknown",
          avatar: decodedToken.avatar || null,
          currency_id: decodedToken.currency_id || null,
          currency_code: decodedToken.currency_code || null,
        };
      } catch (error) {
        console.error("Failed to decode token:", error);
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token");
      }
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
