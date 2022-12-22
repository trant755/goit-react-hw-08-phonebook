import { Box } from './Box';
import { Section } from './Section/Seaction';
import { ContactForm } from './AddContactForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';
import { useEffect } from 'react';
import { useGetContactsQuery } from 'redux/contactsApi';
import { Header } from './Header/Header';
import * as SC from './Phonebook.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const { error: errorWarning } = useGetContactsQuery();
  const isModalOpen = useSelector(state => state.addModal.isModalOpen);

  useEffect(() => {
    if (!errorWarning) return;
    alert(errorWarning);
  }, [errorWarning]);

  return (
    <Box p={5}>
      <SC.App>
        <Header />
        {!isModalOpen && (
          <Section title={'Contacts'}>
            <Contacts />
          </Section>
        )}
        {isModalOpen && (
          <Section title={'Add Contact'}>
            <ContactForm />
          </Section>
        )}
      </SC.App>
    </Box>
  );
};
