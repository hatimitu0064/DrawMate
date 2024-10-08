import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedImg: null,
};

const selectedImgSlice = createSlice({
  name: "selectedImg",
  initialState,
  reducers: {
    setImg: (state, action) => {
      state.selectedImg = action.payload;
    },
  },
});

export const { setImg } = selectedImgSlice.actions;
export default selectedImgSlice.reducer;
