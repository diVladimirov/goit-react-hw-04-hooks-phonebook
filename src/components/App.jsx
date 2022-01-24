import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './Form/ContactsForm';
import ContactsList from './List/ContactsList';
import Filter from './Filter/Filter';

import { Container, FisrtTitle, SecondTitle } from './App.styled';
import GlobalStyle from '../constants/GlobalStyle';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  onFormSubmit = ({ name, number }) => {
    const nameToAdd = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(4), name, number }, ...contacts],
    }));
  };

  onChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  registerLogic = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <GlobalStyle />
        <FisrtTitle>Phonebook</FisrtTitle>
        <ContactsForm onSubmit={this.onFormSubmit} />

        <SecondTitle>Contacts</SecondTitle>
        <Filter filter={filter} onChange={this.onChangeFilter} />
        <ContactsList contacts={this.registerLogic()} onDeleteContact={this.onDeleteContact} />
      </Container>
    );
  }
}

export default App;
