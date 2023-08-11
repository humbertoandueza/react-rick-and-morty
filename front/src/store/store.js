import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./characters/charactersSlice";


export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})