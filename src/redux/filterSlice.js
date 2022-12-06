import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeQueryFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeQueryFilter } = filterSlice.actions;

export default filterSlice.reducer;
