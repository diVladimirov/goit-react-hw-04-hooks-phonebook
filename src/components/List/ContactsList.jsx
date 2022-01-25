import PropTypes from 'prop-types';
import { ContactsListWrapper } from './ContactsList.styled';
import ContactListLi from '../Listitem/ContactListItem';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ContactsListWrapper>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListLi
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  </ContactsListWrapper>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func,
};
