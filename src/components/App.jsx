import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { NameInput } from './NameInput/NameInput';
import { Filter } from './Filter/Filter';
import { Container } from './GlobalStyle';

const storageKey = 'saveContacts';

const itemContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initContact = () => {
  if (localStorage.getItem(storageKey)) {
    return JSON.parse(localStorage.getItem(storageKey));
  }
  return itemContact;
};

export const App = () => {
  const [contacts, setContacts] = useState(initContact);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const delContact = cont => {
    setContacts(prevContacts => prevContacts.filter(e => e.id !== cont));
  };

  const addContact = newContact => {
    const isExist = contacts.some(
      ({ name, number }) =>
        name.toLowerCase().trim() === newContact.name.toLowerCase().trim() ||
        number.trim() === newContact.number.trim()
    );

    if (isExist) {
      return alert(`${newContact.name}: is already in contacts`);
    }

    setContacts(contacts => [{ ...newContact, id: nanoid() }, ...contacts]);
  };

  const getFilter = value => {
    setFilter(value.currentTarget.value.toLowerCase());
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <NameInput onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={getFilter} />
      <Contacts contacts={filteredContacts()} delContact={delContact} />
      <GlobalStyle />
    </Container>
  );
};
