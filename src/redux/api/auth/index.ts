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
    registerReception: build.mutation<
      AUTH.IRegisterReceptionResponse,
      AUTH.IRegisterReceptionRequest
    >({
      query: (data) => ({
        url: `/users/register/reception`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    loginUser: build.mutation<AUTH.ILoginUserResponse, AUTH.ILoginUserRequest>({
      query: (data) => ({
        url: `/users/login/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetUserQuery,
  useRegisterReceptionMutation,
  useLoginUserMutation,
} = api;
