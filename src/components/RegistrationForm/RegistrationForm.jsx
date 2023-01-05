import { Formik } from 'formik';
import * as SC from '../AddContactForm/AddContactForm.styled';
import { Box } from 'components/Box';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from 'redux/authApi';

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const [signUp] = useSignUpMutation();

  const onSubmit = async ({ name, email, password }, { resetForm }) => {
    const userSignUp = {
      name,
      email,
      password,
    };
    try {
      await signUp(userSignUp).unwrap();
      resetForm();
      navigate('/login');
    } catch (error) {
      // alert(error.data.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={onSubmit}
    >
      <SC.Form>
        <SC.LabelInput>
          Name
          <SC.Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></SC.Input>
        </SC.LabelInput>
        <SC.LabelInput>
          Email
          <SC.Input
            type="email"
            name="email"
            pattern=".{3,}"
            title="Password must be more than 3 characters"
            required
          ></SC.Input>
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
