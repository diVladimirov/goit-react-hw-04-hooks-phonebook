import PropTypes from 'prop-types';
import { ContactsListWrapper, ContactsListLi, ContactsListButton } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ContactsListWrapper>
    <ul>
      {contacts.map(contact => (
        <ContactsListLi key={contact.id}>
          <span>{contact.name}:</span>
          <span> {contact.number}</span>
          <ContactsListButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ContactsListButton>
        </ContactsListLi>
      ))}
    </ul>
  </ContactsListWrapper>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
