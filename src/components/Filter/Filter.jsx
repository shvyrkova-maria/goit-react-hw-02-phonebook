// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';

function Filter() {
  let filterInputId = nanoid(3); //??
  return (
    <DebounceInput
      id={`id-${filterInputId}`}
      type="text"
      name="name"
      debounceTimeout={700}
      // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      // placeholder="Name"
      // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    />
  );
}

// Input.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Filter;
