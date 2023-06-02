import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import { selectContactList } from 'redux/contacts/contactsSelectors';
import {
  FormLabel,
  FormInput,
  StyledForm,
} from 'components/form/FormContaks.styled';
import { Overlay, ModalStyles } from './Modal.styled';
import { updateContact } from 'redux/contacts/contactOperetion';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ id, closeModal }) => {
  const contacts = useSelector(selectContactList);
  const dispatch = useDispatch();
  const { name, number } = contacts.filter(contact => contact.id === id)[0];
  const schema = object({
    name: string().required(),
    number: string().required(),
  });
  const initialValues = {
    name,
    number,
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    dispatch(updateContact({ id, ...values }));
    closeModal();
  };

  const handleBackDrop = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <Overlay onClick={handleBackDrop}>
      <ModalStyles>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <StyledForm>
            <FormLabel htmlFor="">
              Name
              <FormInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </FormLabel>
            <FormLabel htmlFor="">
              Phone
              <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </FormLabel>
            <button type="submit" className="button">
              Update contact
            </button>
          </StyledForm>
        </Formik>
      </ModalStyles>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
