import { Box } from './Box';
import { useEffect } from 'react';
import { Section } from './Seaction';
import { ContactForm } from './PhonebookForm';
import { Contacts } from './Contacts';
import { useSelector } from 'react-redux';

const LS_KEY = 'savedContacts';

export const App = () => {
  // const savedContacts = localStorage.getItem(LS_KEY);
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box p={4}>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Contacts />
      </Section>
    </Box>
  );
};
