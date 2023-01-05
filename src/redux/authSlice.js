import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
  },
  isLogin: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.token = action.payload.token;
      state.user.name = action.payload.user.name;
      state.isLogin = true;
    },
    logoutUser: state => {
      state.token = null;
      state.user.name = '';
      state.isLogin = false;
    },
    refreshUser: (state, action) => {
      state.user.name = action.payload.name;
      state.isLogin = true;
    },
  },
});

export const { loginUser, logoutUser, refreshUser } = authSlice.actions;

export default authSlice.reducer;
