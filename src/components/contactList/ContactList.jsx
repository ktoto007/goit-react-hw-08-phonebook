import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem } from 'components/listItem/ListItem';
import { selectFilterParam } from 'redux/filter/filterSelectors';
import { selectContactList } from 'redux/contacts/contactsSelectors';

export const ContactList = ({ updateModal }) => {
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
          updateModal={updateModal}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  updateModal: PropTypes.func.isRequired,
};
