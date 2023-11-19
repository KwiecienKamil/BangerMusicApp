import { configureStore, createSlice } from "@reduxjs/toolkit";

import { TopChartsApi } from "../../TopChartsApi";

export const songsSlice = createSlice({
  name: "song",
  initialState: {
    value: [
      "greedy",
      "/src/assets/audioData/greedy.mp3",
      "Tate McRae",
      1,
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg"
    ],
    songProg: [0, 0]
  },
  reducers: {
    current: (state, action) => {
      state.value = action.payload;
    },
    currentProg: (state, action) => {
      state.songProg = action.payload;
    },
  },
});

export const { current } = songsSlice.actions;
export const { currentProg } = songsSlice.actions;

export const store = configureStore({
  reducer: {
    [TopChartsApi.reducerPath]: TopChartsApi.reducer,
    song: songsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TopChartsApi.middleware),
});
