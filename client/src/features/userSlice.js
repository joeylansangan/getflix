import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  subscription: null
};

export const userSlice = createSlice({
  name: 'user', 
  initialState,

  reducers: {
      login: (state, action) => {
        state.user = action.payload;
      },
      logout: (state) => {
        state.user = null
      },
      subscribe: (state, action) => {
        state.subscription = action.payload
      }
  },
});

export const { login, logout, subscribe } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectSubscription = (state) => state.user.subscription;

export default userSlice.reducer;
