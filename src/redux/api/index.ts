import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_URL,
  prepareHeaders: (headers) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem("tokens") || "{}")
        ?.tokens?.access;
      if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
    } catch (error) {
      console.error("Ошибка парсинга токенов:", error);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error?.status === 401)
      console.warn("Токен истёк. Требуется обновление.");
    return result;
  },
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["patient", "auth"],
  endpoints: () => ({}),
});
