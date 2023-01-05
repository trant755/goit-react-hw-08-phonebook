import { useNavigate } from 'react-router-dom';
import * as SC from './AddContactBtn.styled';

export const AddContactBtn = () => {
  const navigate = useNavigate();

  return (
    <SC.BtnContainer>
      <SC.Btn type="button" onClick={() => navigate('add-contact')}>
        <SC.PlusSymb>+</SC.PlusSymb>
        <SC.Text>Add Contact</SC.Text>
      </SC.Btn>
    </SC.BtnContainer>
  );
};
