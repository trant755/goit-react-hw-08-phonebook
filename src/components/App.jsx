import { Box } from './Box';
import { Section } from './Seaction';
import { ContactForm } from './PhonebookForm';
import { Contacts } from './Contacts';

export const App = () => {
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
