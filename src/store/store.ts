"use client";

import { configureStore } from "@reduxjs/toolkit";
import topbarSlice from "./features/topbar/topbarSlice";

export const store = configureStore({
  reducer: { topbar: topbarSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
