import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.query);
  const dispatch = useDispatch();

  let normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Filter />
      <ul style={{ listStyle: 'inside', paddingLeft: '32px' }}>
        {filtredContacts.map(contact => {
          return (
            <li key={contact.id}>
              <span>{contact.name}:</span> <span>{contact.number}</span>
              <button
                style={{ marginLeft: '10px' }}
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
