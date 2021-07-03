import { Component } from 'react';

import Section from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.state.contacts.some(({ name }) => name === newContact.name)
      ? alert(`Contact ${newContact.name} already exists`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilterValue = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filteredContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.includes(normalizeFilter),
    );
  };

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactsForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} onChange={this.getFilterValue} />
          <ContactsList
            contacts={filteredContacts}
            onDeleteClick={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
