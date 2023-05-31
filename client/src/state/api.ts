//Create redux toolkit boilerplate setup
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse } from "./types";

//create api to fetch data from backend
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), // api endpoint
  reducerPath: "main",
  tagTypes: ["Kpis", "Products"],
  endpoints: (build) => ({
    //response //payload
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery } = api;
