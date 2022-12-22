import { useDispatch } from 'react-redux';
import { changeModalStatus } from 'redux/addModalSlice';
import * as SC from './AddContactBtn.styled';

export const AddContactBtn = () => {
  const dispatch = useDispatch();

  return (
    <SC.BtnContainer>
      <SC.Btn type="button" onClick={() => dispatch(changeModalStatus(true))}>
        <SC.PlusSymb>+</SC.PlusSymb>
        <SC.Text>Add Contact</SC.Text>
      </SC.Btn>
    </SC.BtnContainer>
  );
};
