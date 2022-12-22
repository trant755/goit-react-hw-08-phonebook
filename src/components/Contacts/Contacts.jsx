import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import { useGetContactsQuery } from 'redux/contactsApi';
import { AddContactBtn } from '../AddContactBtn/AddContactBtn';
import * as SC from './Contacts.styled';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.query);
  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Filter />
      {isLoading && <Loader />}
      {!isLoading && (
        <SC.ContactsList style={{ listStyle: 'inside', paddingLeft: '32px' }}>
          {data &&
            filtredContacts.map(contact => {
              return (
                <SC.ListItem key={contact.id}>
                  <ContactsItem contact={contact} />
                </SC.ListItem>
              );
            })}
        </SC.ContactsList>
      )}
      <AddContactBtn />
    </>
  );
};
