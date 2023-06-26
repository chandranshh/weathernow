"use client";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

export default store;
export const RootState = store.getState;
export const AppDispatch = store.dispatch;
