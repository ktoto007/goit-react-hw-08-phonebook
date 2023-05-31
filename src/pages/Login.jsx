import { Formik } from 'formik';
import { object, string } from 'yup';
import {
  FormLabel,
  FormInput,
  StyledForm,
} from 'components/form/FormContaks.styled';

const Login = () => {
  const schema = object({
    email: string().required(),
    password: string().required(),
  });

  const initialValues = {
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
          Email:
          <FormInput type="email" name="email" />
        </FormLabel>
        <FormLabel>
          Password:
          <FormInput type="password" name="password" />
        </FormLabel>
        <button type="submit" className="button">
          Log in
        </button>
      </StyledForm>
    </Formik>
  );
};

export default Login;
