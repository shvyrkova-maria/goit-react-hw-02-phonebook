import {
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

function ContactsList({ contacts, onDeleteClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <div>
              <ContactsDetails>
                <FaUser size={14} />
                <span>{name}</span>
              </ContactsDetails>
              <ContactsDetails>
                <FaPhoneAlt size={14} />
                <span>{number}</span>
              </ContactsDetails>
            </div>
            <Button type="button" onClick={() => onDeleteClick(id)}>
              Delete
            </Button>
          </ContactsItem>
        );
      })}
    </ul>
  );
}

export default ContactsList;
