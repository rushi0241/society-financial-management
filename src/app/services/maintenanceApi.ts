import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MaintenanceRecord } from "../../types/maintenance";
export const maintenanceApi = createApi({
  reducerPath: "maintenanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://my-json-server.typicode.com/rushi0241/society-financial-management/",
  }),
  endpoints: (builder) => ({
    getMaintenance: builder.query<MaintenanceRecord[], void>({
      query: () => "/maintenance",
    }),
  }),
});
export const { useGetMaintenanceQuery } = maintenanceApi;
