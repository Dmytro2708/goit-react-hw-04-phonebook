import { ContactsList, ContactEl } from './Contacts.styled';

export const Contacts = ({ contacts, delContact }) => {
  return (
    <ContactsList>
      {contacts.map(e => (
        <ContactEl key={e.id}>
          <p>
            {e.name}: {e.number}
          </p>
          <button
            type="button"
            onClick={() => {
              delContact(e.id);
            }}
          >
            Delete
          </button>
        </ContactEl>
      ))}
    </ContactsList>
  );
}
