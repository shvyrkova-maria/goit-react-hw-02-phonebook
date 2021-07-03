import { Component } from 'react';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';
import {
  Form,
  Button,
  Label,
} from 'components/ContactsForm/ContactsForm.styled';
// import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactsForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ id: nanoid(3), name, number });
    this.formReset();
  };

  formReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    let nameInputId = nanoid(3);
    let phoneInputId = nanoid(3);

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={`id-${nameInputId}`}>Name</Label>
        <DebounceInput
          id={`id-${nameInputId}`}
          type="text"
          name="name"
          debounceTimeout={700}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.handleChange}
          value={this.state.name}
          required
        />

        <Label htmlFor={`id-${phoneInputId}`}>Number</Label>
        <DebounceInput
          id={`id-${phoneInputId}`}
          type="tel"
          name="number"
          debounceTimeout={700}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="+38 (000) 000-00-00"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={this.state.number}
          onChange={this.handleChange}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactsForm;
