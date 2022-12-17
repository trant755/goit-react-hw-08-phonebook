import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();

  const isDeleting = useSelector(state => state.contacts.isLoading);

  return (
    <>
      <span>{contact.name}:</span> <span>{contact.phone}</span>
      <button
        style={{ marginLeft: '10px' }}
        type="button"
        disabled={isDeleting}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </>
  );
};
