// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';

function Filter({ filter, onChange }) {
  return (
    <DebounceInput
      id={`id-${nanoid(3)}`}
      type="text"
      name="name"
      value={filter}
      debounceTimeout={700}
      onChange={onChange}
      placeholder="Search"
    />
  );
}

// Input.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Filter;
