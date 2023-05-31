import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { selectContactList } from 'redux/selectors';
import { FormLabel, FormInput, StyledForm } from './FormContaks.styled';
import { addContact } from 'redux/operetion';

export const FormContaks = () => {
  const contacts = useSelector(selectContactList);
  const dispatch = useDispatch();

  const schema = object({
    name: string().required(),
    number: string().required(),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    } else {
      dispatch(addContact({ ...values }));
    }
  };

  return (
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
          Add contact
        </button>
      </StyledForm>
    </Formik>
  );
};
