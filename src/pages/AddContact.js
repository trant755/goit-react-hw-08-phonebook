import { Section } from 'components/Section/Seaction';
import { ContactForm } from 'components/AddContactForm/PhonebookForm';

const AddContact = () => {
  return (
    <Section title={'Add Contact'}>
      <ContactForm />
    </Section>
  );
};

export default AddContact;
