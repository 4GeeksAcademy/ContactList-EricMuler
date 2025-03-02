import React, { createContext, useState, useContext } from 'react';


const contactContext = createContext();

export const contactProvider = ({ children }) => {
  const [contacts, setcontacts] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan@correo.com', phone: '123-456-789' },
    { id: 2, name: 'Ana García', email: 'ana@correo.com', phone: '987-654-321' },
  ]);

  const addContact = (newContact) => {
    setcontacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setcontacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (id, updatedContact) => {
    setcontacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, ...updatedContact } : contact
      )
    );
  };

  return (
    <contactContext.Provider value={{ contacts, addContact, deleteContact, editContact }}>
      {children}
    </contactContext.Provider>
  );
};


export const useContacts = () => useContext(contactContext);
