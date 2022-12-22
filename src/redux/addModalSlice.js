import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
};

export const addModalSlice = createSlice({
  name: 'addModal',
  initialState,
  reducers: {
    changeModalStatus: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { changeModalStatus } = addModalSlice.actions;

export default addModalSlice.reducer;
