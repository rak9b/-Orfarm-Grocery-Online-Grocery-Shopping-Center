import { configureStore } from "@reduxjs/toolkit";
import SliceCounters from "./../CreateSlice/CreateSlice";

const store = configureStore({
  reducer: {
    counter: SliceCounters,
  },
});
export default store;
