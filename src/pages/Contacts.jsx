import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FormContaks } from 'components/form/FormContaks';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { fetchContacts } from 'redux/contacts/operetion';
const Contacts = () => {
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

export default Contacts;
