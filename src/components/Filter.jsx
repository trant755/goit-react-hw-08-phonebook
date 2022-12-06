import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeQueryFilter } from 'redux/filterSlice';
import * as SC from './Phonebook.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter.query);
  const dispatch = useDispatch();

  return (
    <Formik>
      <SC.LabelInput>
        Find contacts by name
        <Field
          type="text"
          name="filter"
          onChange={e => dispatch(changeQueryFilter(e.target.value))}
          value={filter}
        ></Field>
      </SC.LabelInput>
    </Formik>
  );
};
