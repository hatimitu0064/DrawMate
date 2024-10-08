import { configureStore } from "@reduxjs/toolkit";
import selectedImgReducer from "./features/selectedImg/SelectedImgSlice";
import createTitleReducer from "./features/createText/CreateTitle";
import createTagReducer from "./features/createText/CreateTag";
import createCategoryReducer from "./features/createText/CreateCategory";
import loadingReducer from "./features/loading/Loading";

export const store = configureStore({
  reducer: {
    img: selectedImgReducer,
    loading: loadingReducer,
    title: createTitleReducer,
    tag: createTagReducer,
    category: createCategoryReducer,
  },
});
