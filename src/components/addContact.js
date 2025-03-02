import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';

const addContact = () => {
  const { addContact, editContact, contacts } = useContacts();
  const { id } = useParams();
  const history = useHistory();

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  
  useEffect(() => {
    if (id) {
      const contactToEdit = contacts.find((contact) => contact.id === parseInt(id));
      if (contactToEdit) {
        setContactData(contactToEdit);
      }
    }
  }, [id, contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editContact(id, contactData);
    } else {
      addContact({ ...contactData, id: Date.now() }); 
    }
    history.push('/'); 
  };

  return (
    <div>
      <h2>{id ? 'Edit Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={contactData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="phone"
          name="phone"
          value={contactData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <button type="submit">{id ? 'Save Changes' : 'Add Contact'}</button>
      </form>
    </div>
  );
};

export default addContact;
