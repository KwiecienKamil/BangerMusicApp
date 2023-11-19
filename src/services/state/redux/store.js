import { configureStore, createSlice } from "@reduxjs/toolkit";

import { TopChartsApi } from "../../TopChartsApi";

export const songsSlice = createSlice({
  name: "song",
  initialState: {
    value: [
      "Banger",
      "/src/assets/audioData/greedy.mp3",
      "Kamil Kwiecień",
      1,
      "https://th.bing.com/th/id/R.98912fddf2b58db3f950e104929b7641?rik=kMTvADHWQoWW5Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f__qlVMOwK_NQ%2fTQz90GWP4TI%2fAAAAAAAAADM%2fK7LE61rVCrY%2fs1600%2fnota%2bmusical%2bfogo.jpg&ehk=Qp%2fDLoH20b4inf3MUc%2f0OTHKK3%2b6zF6HXnyfuLxaQk0%3d&risl=&pid=ImgRaw&r=0"
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
