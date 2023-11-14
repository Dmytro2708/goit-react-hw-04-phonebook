import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { NameInput } from './NameInput/NameInput';
import { Filter } from './Filter/Filter';
import { Container } from './GlobalStyle';

const storageKey = 'saveContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(storageKey, JSON.stringify(this.state.contacts));
    }
  }

  addContact = cont => {
    this.setState(prevState => {
      cont.id = nanoid();
      return {
        contacts: [cont, ...prevState.contacts],
      };
    });
  };

  delContact = cont => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(e => e.id !== cont),
      };
    });
  };

  getFilter = value => {
    let name = value.currentTarget.value.toLowerCase();
    this.setState({
      filter: name,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <NameInput addstate={this.addContact} state={this.state} />
        <h2>Contacts</h2>
        <Filter filter={this.getFilter} />
        <Contacts contacts={this.filteredContacts()} delContact={this.delContact} />
        <GlobalStyle />
      </Container>
    );
  }
}
