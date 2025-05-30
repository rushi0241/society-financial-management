import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Reminder } from "../../types/reminder";

export const reminderApi = createApi({
  reducerPath: "reminderApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://my-json-server.typicode.com/rushi0241/society-financial-management/",
  }),
  endpoints: (builder) => ({
    getReminder: builder.query<Reminder[], void>({
      query: () => "/reminder",
    }),
  }),
});
export const { useGetReminderQuery } = reminderApi;
