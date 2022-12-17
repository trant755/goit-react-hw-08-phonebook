import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { ContactsItem } from './ContactsItem';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.query);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Filter />
      {isLoading && <p>Loading, please wait...</p>}
      <ul style={{ listStyle: 'inside', paddingLeft: '32px' }}>
        {filtredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactsItem contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
