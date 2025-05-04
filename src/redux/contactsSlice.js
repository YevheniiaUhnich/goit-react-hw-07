import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "./contactsOps";
// import { selectFilteredContacts } from "./filtersSlice";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;

// Selectors

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectStatusFilter = (state) => state.filters.contactsFilter;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectStatusFilter, selectNameFilter],
  (contacts, statusFilter, nameFilter) => {
    let filtered = contacts;

    if (statusFilter === "active") {
      filtered = filtered.filter((contact) => !contact.completed);
    } else if (statusFilter === "completed") {
      filtered = filtered.filter((contact) => contact.completed);
    }
    if (nameFilter && nameFilter.trim() !== "") {
      const normalized = nameFilter.toLowerCase();
      filtered = filtered.filter((contact) =>
        contact.name.toLowerCase().includes(normalized)
      );
    }
    return filtered;
  }
);

export const { addContact, deleteContact, toggleCompleted } =
  contactsSlice.actions;
