import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormStyle, FormStyleLabel, FormStyleInput, FormStyleButton } from './ContactsForm.styled';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormStyle onSubmit={this.handleSubmit}>
        <FormStyleLabel>Name</FormStyleLabel>
        <FormStyleInput
          type="text"
          value={name}
          onChange={this.handleChange}
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
          onChange={this.handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Input number xxx-xx-xx"
        />
        <FormStyleButton type="submit">Add contact</FormStyleButton>
      </FormStyle>
    );
  }
}

export default ContactsForm;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
