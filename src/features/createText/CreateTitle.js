import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputTitle: "chatGPTでタイトルを生成",
};

const createTitleSlice = createSlice({
  name: "createTitle",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.inputTitle = action.payload;
    },
    resetTitle: (state, action) => {
      state.inputTitle = "chatGPTでタイトルを生成";
    },
  },
});

export const { setTitle, resetTitle } = createTitleSlice.actions;
export default createTitleSlice.reducer;
