import { useDeleteContactMutation } from 'redux/contactsApi';
import * as SC from './ContactsItem.styled';

export const ContactsItem = ({ contact }) => {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();

  function getInitial(name) {
    let nameArr = name.split(' ');
    if (nameArr.length > 2) {
      nameArr = nameArr.slice(0, 2);
    }
    const initial = nameArr.map(n => n[0]).join('');
    return initial;
  }

  return (
    <>
      <SC.ContactInfo>
        <SC.Initials>{getInitial(contact.name)}</SC.Initials>
        <SC.Name>{contact.name}:</SC.Name> <SC.Phone>{contact.phone}</SC.Phone>
      </SC.ContactInfo>
      <SC.DeleteBtn
        style={{ marginLeft: '10px' }}
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={isDeliting}
      >
        X
      </SC.DeleteBtn>
    </>
  );
};
