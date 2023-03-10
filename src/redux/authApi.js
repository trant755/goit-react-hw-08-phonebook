import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: userSignUp => ({
        url: '/users/signup',
        method: 'POST',
        body: userSignUp,
      }),
    }),
    login: builder.mutation({
      query: userLogin => ({
        url: '/users/login',
        method: 'POST',
        body: userLogin,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    currentUser: builder.query({
      query: () => '/users/current',
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useCurrentUserQuery,
} = authApi;
