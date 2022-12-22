import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filterSlice from './filterSlice';
import addModalSlice from './addModalSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice,
    addModal: addModalSlice,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
