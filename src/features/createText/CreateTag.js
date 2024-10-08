import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputTag: "chatGPTでタグを生成",
};

const createTagSlice = createSlice({
  name: "createTag",
  initialState,
  reducers: {
    setTag: (state, action) => {
      state.inputTag = action.payload;
    },
    resetTag: (state, action) => {
      state.inputTag = "chatGPTでタグを生成";
    },
  },
});

export const { setTag, resetTag } = createTagSlice.actions;
export default createTagSlice.reducer;
