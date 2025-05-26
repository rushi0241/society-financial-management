import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Reminder } from "../../types/reminder";

export const reminderApi = createApi({
  reducerPath: "reminderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getReminder: builder.query<Reminder[], void>({
      query: () => "/reminder",
    }),
  }),
});
export const { useGetReminderQuery } = reminderApi;
