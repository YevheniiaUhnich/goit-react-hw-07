import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,

  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

//selectors

export const selectNameFilter = (state) => state.filters.name;
