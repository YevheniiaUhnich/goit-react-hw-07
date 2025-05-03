import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "all",
    name: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter, setNameFilter } = slice.actions;
export default slice.reducer;
