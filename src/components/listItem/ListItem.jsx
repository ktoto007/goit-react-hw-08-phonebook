import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/operetion';
import { ElementContent, StyledListItem } from './ListItem.styled';

export const ListItem = ({ id, name, number, openModal }) => {
  const dispatch = useDispatch();
  return (
    <StyledListItem>
      <ElementContent>
        {name}: {number}
      </ElementContent>
      <button
        type="button"
        className="button"
        id={id}
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
      <button
        type="button"
        className="button"
        id={id}
        onClick={() => openModal(id)}
      >
        Update
      </button>
    </StyledListItem>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
