import { createSlice } from "@reduxjs/toolkit";

const SliceCounters = createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = SliceCounters.actions;
export default SliceCounters.reducer;
