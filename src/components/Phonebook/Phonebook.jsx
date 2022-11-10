import { useState, useEffect } from 'react';
import { Section } from './Seaction';
import { nanoid } from 'nanoid';
import { ContactForm } from './PhonebookForm';
import { Contacts } from './Contacts';

const LS_KEY = 'savedContacts';

export const Phonebook = () => {
  const savedContacts = localStorage.getItem(LS_KEY);
  const [contacts, setContacts] = useState(
    () => JSON.parse(savedContacts) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onDeleteBtnClick = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const HandleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const SubmitNameForm = ({ name, number }, { resetForm }) => {
    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      return alert(`${name} is alredy in contacts.`);
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevContacts => [contact, ...prevContacts]);
    resetForm();
  };

  return (
    <>
      <Section title={'Phonebook'}></Section>
      <ContactForm onSubmit={SubmitNameForm} />
      <Section title={'Contacts'}>
        <Contacts
          onChange={HandleChangeFilter}
          filter={filter}
          contacts={contacts}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      </Section>
    </>
  );
};
