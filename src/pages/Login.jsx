import { Formik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import {
  FormLabel,
  FormInput,
  StyledForm,
} from 'components/form/FormContaks.styled';
import { login } from 'redux/auth/authOperetion';

const Login = () => {
  const schema = object({
    email: string().required(),
    password: string().required(),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    dispatch(login(values));
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
