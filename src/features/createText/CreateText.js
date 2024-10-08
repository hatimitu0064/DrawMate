import { createSlice, combineReducers } from "@reduxjs/toolkit";

// Title slice
const initialTitleState = {
  inputTitle: "chatGPTでタイトルを生成",
};

const createTitleSlice = createSlice({
  name: "createTitle",
  initialState: initialTitleState,
  reducers: {
    setTitle: (state, action) => {
      state.inputTitle = action.payload;
    },
    resetTitle: (state) => {
      state.inputTitle = "chatGPTでタイトルを生成";
    },
  },
});

// Tag slice
const initialTagState = {
  inputTag: "chatGPTでタグを生成",
};

const createTagSlice = createSlice({
  name: "createTag",
  initialState: initialTagState,
  reducers: {
    setTag: (state, action) => {
      state.inputTag = action.payload;
    },
    resetTag: (state) => {
      state.inputTag = "chatGPTでタグを生成";
    },
  },
});

// Category slice
const initialCategoryState = {
  inputCategory: "chatGPTでカテゴリーを生成",
};

const createCategorySlice = createSlice({
  name: "createCategory",
  initialState: initialCategoryState,
  reducers: {
    setCategory: (state, action) => {
      state.inputCategory = action.payload;
    },
    resetCategory: (state) => {
      state.inputCategory = "chatGPTでカテゴリーを生成";
    },
  },
});

// Export actions
export const { setTitle, resetTitle } = createTitleSlice.actions;
export const { setTag, resetTag } = createTagSlice.actions;
export const { setCategory, resetCategory } = createCategorySlice.actions;

// Combine the reducers
const rootReducer = combineReducers({
  title: createTitleSlice.reducer,
  tag: createTagSlice.reducer,
  category: createCategorySlice.reducer,
});

export default rootReducer;
