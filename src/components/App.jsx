import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FormContaks } from './form/FormContaks';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { fetchContacts } from 'redux/operetion';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h2>Phonebook</h2>
      <FormContaks />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
