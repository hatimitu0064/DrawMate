import { configureStore } from "@reduxjs/toolkit";
import selectedImgReducer from "./features/selectedImg/SelectedImgSlice";
import loadingReducer from "./features/loading/Loading";
import rootReducer from "./features/createText/CreateText";

export const store = configureStore({
  reducer: {
    img: selectedImgReducer,
    loading: loadingReducer,
    create: rootReducer,
  },
});
