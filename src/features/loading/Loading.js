import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingTitle: false,
  loadingTag: false,
  loadingCategory: false,
  loadingCopy: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      const { type } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state, type)) {
        state[type] = true;
      }
    },
    endLoading: (state, action) => {
      const { type } = action.payload;
      if (Object.prototype.hasOwnProperty.call(state, type)) {
        state[type] = false;
      }
    },
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
