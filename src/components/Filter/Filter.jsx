import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { changeQueryFilter } from 'redux/filterSlice';
import * as SC from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter.query);
  const dispatch = useDispatch();

  return (
    <SC.Filter>
      <Formik>
        <SC.LabelInput>
          Search
          <SC.Input
            type="text"
            name="filter"
            placeholder="Name"
            onChange={e => dispatch(changeQueryFilter(e.target.value))}
            value={filter}
          ></SC.Input>
        </SC.LabelInput>
      </Formik>
    </SC.Filter>
  );
};
