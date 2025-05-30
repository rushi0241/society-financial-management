import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Family } from "../../types/family";

export const familyApi = createApi({
  reducerPath: "familyApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://my-json-server.typicode.com/rushi0241/society-financial-management/",
  }),
  endpoints: (builder) => ({
    getFamilies: builder.query<Family[], void>({
      query: () => "/families_with_maintenance",
    }),
  }),
});

export const { useGetFamiliesQuery } = familyApi;
