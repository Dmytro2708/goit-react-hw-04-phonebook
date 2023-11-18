import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { NameInput } from './NameInput/NameInput';
import { Filter } from './Filter/Filter';
import { Container } from './GlobalStyle';

const storageKey = 'saveContacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (cont) => {
    setContacts((prevContacts) => [
      { id: nanoid(), ...cont },
      ...prevContacts,
    ]);
  };

  const delContact = (contId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contId)
    );
  };

  const getFilter = (value) => {
    setFilter(value.currentTarget.value.toLowerCase());
  };

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <NameInput addstate={addContact} state={{ contacts, filter }} />
      <h2>Contacts</h2>
      <Filter filter={getFilter} />
      <Contacts contacts={filteredContacts()} delContact={delContact} />
      <GlobalStyle />
    </Container>
  );
};

