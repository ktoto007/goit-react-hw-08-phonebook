import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlise';
import { filterReduser } from './filterSlise';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
