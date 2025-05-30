import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MaintenanceRecord } from "../../types/maintenance";

export const maintenanceApi = createApi({
  reducerPath: "maintenanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mocki.io/v1/",
  }),
  endpoints: (builder) => ({
    getMaintenance: builder.query<MaintenanceRecord[], void>({
      query: () => "400ca316-64c9-434c-b285-92c371c7000c",
      transformResponse: (response: { maintenance: MaintenanceRecord[] }) =>
        response.maintenance,
    }),
  }),
});

export const { useGetMaintenanceQuery } = maintenanceApi;
