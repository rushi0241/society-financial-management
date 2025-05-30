import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Family } from "../../types/family";

export const familyApi = createApi({
  reducerPath: "familyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mocki.io/v1/",
  }),
  endpoints: (builder) => ({
    getFamilies: builder.query<Family[], void>({
      query: () => "400ca316-64c9-434c-b285-92c371c7000c",
      transformResponse: (response: { families_with_maintenance: Family[] }) =>
        response.families_with_maintenance,
    }),
  }),
});

export const { useGetFamiliesQuery } = familyApi;
