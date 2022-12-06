import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import * as SC from './Phonebook.styled';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const onSubmit = ({ name, number }, { resetForm }) => {
    const isExist = contacts.find(contact => name === contact.name);

    if (isExist) {
      return alert(`${name} is alredy in contacts.`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
    resetForm();
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
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Field>
        </SC.LabelInput>
        <SC.LabelInput>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Field>
        </SC.LabelInput>
        <button type="submit">Add contact</button>
      </SC.Form>
    </Formik>
  );
};
