//Create redux toolkit boilerplate setup
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//create api to fetch data from backend
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), // api endpoint
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
