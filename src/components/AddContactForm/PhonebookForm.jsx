import { Formik } from 'formik';
import * as SC from './AddContactForm.styled';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsApi';
import { useDispatch } from 'react-redux';
import { changeModalStatus } from 'redux/addModalSlice';
import { Box } from 'components/Box';

export const ContactForm = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const dispatch = useDispatch();

  const onSubmit = ({ name, phone }, { resetForm }) => {
    const isExist = contacts.find(contact => name === contact.name);

    if (isExist) {
      return alert(`${name} is alredy in contacts.`);
    }

    const contact = {
      name,
      phone,
    };
    addContact(contact);
    resetForm();
    isSuccess && dispatch(changeModalStatus(false));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></SC.Input>
        </SC.LabelInput>
        <Box display={'flex'} justifyContent={'space-between'}>
          <SC.AddBtn type="submit">Add contact</SC.AddBtn>
          <SC.AddBtn
            type="button"
            onClick={() => dispatch(changeModalStatus(false))}
          >
            Back to contacts
          </SC.AddBtn>
        </Box>
      </SC.Form>
    </Formik>
  );
};
