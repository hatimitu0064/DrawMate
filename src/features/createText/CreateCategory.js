import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputCategory: "chatGPTでカテゴリーを生成",
};

const createCategorySlice = createSlice({
  name: "createCategory",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.inputCategory = action.payload;
    },
    resetCategory: (state, action) => {
      state.inputCategory = "chatGPTでカテゴリーを生成";
    },
  },
});

export const { setCategory, resetCategory } = createCategorySlice.actions;
export default createCategorySlice.reducer;
