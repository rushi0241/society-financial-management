import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Reminder } from "../../types/reminder";

export const reminderApi = createApi({
  reducerPath: "reminderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mocki.io/v1/",
  }),
  endpoints: (builder) => ({
    getReminder: builder.query<Reminder[], void>({
      query: () => "400ca316-64c9-434c-b285-92c371c7000c",
      transformResponse: (response: { reminder: Reminder[] }) =>
        response.reminder,
    }),
  }),
});
export const { useGetReminderQuery } = reminderApi;
