import { Formik } from 'formik';
import * as SC from '../AddContactForm/AddContactForm.styled';
import { useLoginMutation } from 'redux/authApi';
import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/authSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async ({ name, email, password }, { resetForm }) => {
    const userLogin = {
      email,
      password,
    };

    try {
      const data = await login(userLogin).unwrap();
      dispatch(loginUser(data));

      resetForm();
    } catch (error) {
      if (error.status === 400) {
        alert('Login error: wrong username or password!');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <SC.Form>
        <SC.LabelInput>
          Email
          <SC.Input type="email" name="email" required></SC.Input>
        </SC.LabelInput>
        <SC.LabelInput>
          Password
          <SC.Input
            type="password"
            name="password"
            pattern=".{7,}"
            title="Password must be more than 3 characters"
            required
          ></SC.Input>
        </SC.LabelInput>
        <Box display={'flex'} justifyContent={'space-between'}>
          <SC.AddBtn type="submit">Login</SC.AddBtn>
        </Box>
      </SC.Form>
    </Formik>
  );
};
