import { configureStore } from "@reduxjs/toolkit";
import { familyApi } from "./services/familyApi";
import { reminderApi } from "./services/reminderApi";

export const store = configureStore({
  reducer: {
    [familyApi.reducerPath]: familyApi.reducer,
    [reminderApi.reducerPath]: reminderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(familyApi.middleware)
      .concat(reminderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
