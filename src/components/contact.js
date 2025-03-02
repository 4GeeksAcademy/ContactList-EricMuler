import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../context/contactContext';
import contactCard from './contactCard';

const contact = () => {
  const { contacts, deleteContact } = useContacts();

  return (
    <div>
      <h1>contact List</h1>
      <Link to="/add-contact">Add New contact</Link>
      <div>
        {contacts.map((contact) => (
          <contactCard
            key={contact.id}
            contact={contact}
            deletecontact={deleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default contact;
