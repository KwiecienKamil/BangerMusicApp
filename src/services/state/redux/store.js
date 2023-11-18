import { configureStore, createSlice } from "@reduxjs/toolkit";

import { TopChartsApi } from "../../TopChartsApi";

export const songsSlice = createSlice({
  name: "song",
  initialState: {
    value: [
      "greedy",
      "/src/assets/audioData/greedy.mp3",
      "Tate McRae"
    ],
  },
  reducers: {
    current: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { current } = songsSlice.actions;

export const store = configureStore({
  reducer: {
    [TopChartsApi.reducerPath]: TopChartsApi.reducer,
    song: songsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TopChartsApi.middleware),
});
