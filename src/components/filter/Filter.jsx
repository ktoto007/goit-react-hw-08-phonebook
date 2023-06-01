import { useDispatch } from 'react-redux';
import { FilterInput } from './Filter.styled';
import { filtredContacts } from 'redux/filter/filterSlise';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label htmlFor="">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={e => {
          dispatch(filtredContacts(e.target.value));
        }}
      />
    </label>
  );
};
