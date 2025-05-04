import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: "all",
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,

  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter, setNameFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

//selectors

export const selectStatusFilter = (state) => state.filters.status;

export const selectNameFilter = (state) => state.filters.name;
