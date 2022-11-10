import React, { Component } from 'react';
import { Section } from './Seaction';
import { nanoid } from 'nanoid';
import { ContactForm } from './PhonebookForm';
import { Contacts } from './Contacts';

const LS_KEY = 'savedContacts';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  onDeleteBtnClick = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  HandleChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  SubmitNameForm = ({ name, number }, { resetForm }) => {
    const isExist = this.state.contacts.find(contact => contact.name === name);

    if (isExist) {
      return alert(`${name} is alredy in contacts.`);
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
      name,
      number,
    }));
    resetForm();
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}></Section>
        <ContactForm onSubmit={this.SubmitNameForm} />
        <Section title={'Contacts'}>
          <Contacts
            onChange={this.HandleChangeFilter}
            filter={this.state.filter}
            contacts={this.state.contacts}
            onDeleteBtnClick={this.onDeleteBtnClick}
          />
        </Section>
      </>
    );
  }
}
