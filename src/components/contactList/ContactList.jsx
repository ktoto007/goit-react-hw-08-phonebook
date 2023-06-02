import { useSelector } from 'react-redux';
import { ListItem } from 'components/listItem/ListItem';
import { selectFilterParam } from 'redux/filter/filterSelectors';
import { selectContactList } from 'redux/contacts/contactsSelectors';

export const ContactList = ({ openModal }) => {
  const contacts = useSelector(selectContactList);
  const filter = useSelector(selectFilterParam);

  const onFilterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {onFilterContact().map(({ id, name, number }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          number={number}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
