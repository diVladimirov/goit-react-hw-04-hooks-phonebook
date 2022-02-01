import { useState } from 'react';
import PropTypes from 'prop-types';

import { FormStyle, FormStyleLabel, FormStyleInput, FormStyleButton } from './ContactsForm.styled';

const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormStyleLabel>Name</FormStyleLabel>
      <FormStyleInput
        type="text"
        value={name}
        onChange={handleNameChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Input name"
        required
      />

      <FormStyleLabel>Number</FormStyleLabel>
      <FormStyleInput
        type="tel"
        value={number}
        onChange={handleNumberChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Input number xxx-xx-xx"
      />
      <FormStyleButton type="submit">Add contact</FormStyleButton>
    </FormStyle>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
