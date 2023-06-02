import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
  updateContact,
} from './operetion';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(removeContact.pending, handlePending)
      .addCase(updateContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.rejected, handleRejected)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.contacts.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          item => item.id === action.payload.id
        );

        state.contacts[index].name = action.payload.name;
        state.contacts[index].number = action.payload.number;
      });
  },
});

export const contactsReduser = contactsSlice.reducer;
