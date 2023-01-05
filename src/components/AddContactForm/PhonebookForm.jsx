import { Formik } from 'formik';
import * as SC from './AddContactForm.styled';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { Box } from 'components/Box';
import { useNavigate } from 'react-router-dom';

export const ContactForm = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const navigate = useNavigate();

  const onSubmit = ({ name, number }, { resetForm }) => {
    const isExist = contacts.find(contact => name === contact.name);

    if (isExist) {
      return alert(`${name} is alredy in contacts.`);
    }

    const contact = {
      name,
      number,
    };
    addContact(contact);
    resetForm();
    isSuccess && navigate('/');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
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
          Number
          <SC.Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></SC.Input>
        </SC.LabelInput>
        <Box display={'flex'} justifyContent={'space-between'}>
          <SC.AddBtn type="submit">Add contact</SC.AddBtn>
          <SC.AddBtn type="button" onClick={() => navigate('/')}>
            Back to contacts
          </SC.AddBtn>
        </Box>
      </SC.Form>
    </Formik>
  );
};
