import PropTypes from 'prop-types';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

export default function Filter({ filter, onChange }) {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          placeholder="Input name to find"
        />
      </div>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
