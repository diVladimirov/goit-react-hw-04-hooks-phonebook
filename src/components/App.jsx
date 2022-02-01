import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './Form/ContactsForm';
import ContactsList from './List/ContactsList';
import Filter from './Filter/Filter';

import { Container, FisrtTitle, SecondTitle } from './App.styled';
import GlobalStyle from '../constants/GlobalStyle';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const onFormSubmit = (name, number) => {
    const nameToAdd = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts(prevState => [{ id: nanoid(4), name, number }, ...prevState]);
  };

  const onChangeFilter = event => setFilter(event.target.value);

  const registerLogic = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const onDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    // }));
  };

  return (
    <Container>
      <GlobalStyle />
      <FisrtTitle>Phonebook</FisrtTitle>
      <ContactsForm onSubmit={onFormSubmit} />

      <SecondTitle>Contacts</SecondTitle>
      <Filter filter={filter} onChange={onChangeFilter} />
      <ContactsList contacts={registerLogic()} onDeleteContact={onDeleteContact} />
    </Container>
  );
};

export default App;
