import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    backgroundColor: "#ffffff", // Default background color
  },
  reducers: {
    changeColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
