import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MaintenanceRecord } from "../../types/maintenance";
export const maintenanceApi = createApi({
  reducerPath: "maintenanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getMaintenance: builder.query<MaintenanceRecord[], void>({
      query: () => "/maintenance",
    }),
  }),
});
export const { useGetMaintenanceQuery } = maintenanceApi;
