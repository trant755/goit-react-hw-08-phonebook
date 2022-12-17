import { Box } from './Box';
import { Section } from './Seaction';
import { ContactForm } from './PhonebookForm';
import { Contacts } from './Contacts';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const errorWarning = useSelector(state => state.contacts.error);

  useEffect(() => {
    if (!errorWarning) return;
    alert(errorWarning);
  }, [errorWarning]);

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
