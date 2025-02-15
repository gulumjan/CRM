import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const dynamicBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_URL}`;

  const fetchBaseQueryWithLanguage = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const tokens = localStorage.getItem("tokens");

      if (tokens) {
        try {
          const parsedTokens = JSON.parse(tokens);
          const accessToken = parsedTokens?.tokens?.access || null;

          if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
            console.log("Authorization header:", headers.get("Authorization"));
          } else {
            console.warn("Access token отсутствует в сохранённых данных");
          }
        } catch (error) {
          console.error("Ошибка парсинга токенов из localStorage:", error);
        }
      } else {
        console.warn("Токены отсутствуют в localStorage");
      }

      return headers;
    },
  });

  try {
    const result = await fetchBaseQueryWithLanguage(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      console.warn("Токен истёк. Необходимо выполнить обновление токенов.");
    }

    return result;
  } catch (error) {
    console.error("Ошибка выполнения запроса:", error);
    throw error;
  }
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: dynamicBaseQuery,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["patient", "auth"],
  endpoints: () => ({}),
});
