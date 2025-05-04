import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  status: "all",
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

export const selectFilteredContacts = (state) => state.filters.status;
