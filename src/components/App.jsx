import React from 'react';
import { nanoid } from 'nanoid';
// импорт функции разметки
import Section from './Section/Section';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Markup, MainTitle, Title } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    this.addContacts(name, number);
  };

  addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <Markup>
          <MainTitle>Phonebook</MainTitle>
          <ContactsForm
            contacts={contacts}
            onSubmitData={this.formSubmitHandler}
          />
          <Title>Contacts</Title>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList contacts={visibleContacts} />
        </Markup>
      </Section>
    );
  }
}
