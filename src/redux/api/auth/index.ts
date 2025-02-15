import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: `/user/`,
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserQuery } = api;
