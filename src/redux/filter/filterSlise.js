import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filtredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filtredContacts } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
