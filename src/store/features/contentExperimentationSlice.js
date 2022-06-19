import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectSwitcherName: "First Content",
};

export const contentExperimentationSlice = createSlice({
  name: "contentExperimentation",
  initialState,
  reducers: {
    setSelectContentExperimentationName: (state, action) => {
      state.selectContentExperimentationName = action.payload;
    },
  },
});

export const { contentExperimentationName } =
  contentExperimentationSlice.actions;

export const allContent = (state) => state.contentExperimentation;
export default contentExperimentationSlice.reducer;
