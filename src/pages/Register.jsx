import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormLabel,
  FormInput,
  StyledForm,
} from 'components/form/FormContaks.styled';

const Register = () => {
  const schema = object({
    name: string().required(),
    email: string().required(),
    password: string().required(),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <FormLabel>
          Name:
          <FormInput type="text" name="name" />
        </FormLabel>
        <FormLabel>
          Email:
          <FormInput type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password:
          <FormInput type="password" name="password" />
        </FormLabel>
        <button type="submit" className="button">
          register
        </button>
      </StyledForm>
    </Formik>
  );
};

export default Register;
