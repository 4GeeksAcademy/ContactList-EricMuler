import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext } from 'react';
import { UserContext } from "./UserContext.jsx";
import { contactListContext } from './UserContext.jsx';

function contactList() {

    const [contacts, setcontacts] = useContext(contactListContext)
    const [editedValue, setEditedValue] = useState('')
    const [editing, setEditing] = useState({ id: null, field: '' })
    const [user, setUser] = useContext(UserContext);

    const getcontactList = async() => {
      if (!user) return; 
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`);
      const data = await response.json();
      setcontacts(data.contacts);
    }

    useEffect(() => {   
      getcontactList(user, setcontacts);
    }, [user])
    
    const deletecontact = async (id) => { 
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`, {
        method: 'DELETE',
      })
      getcontactList();
    }

    const editcontact = async (id, field) => { 
      await fetch(`https://playground.4geeks.com/contact/agendas/${user}/contacts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ [field]: editedValue }), 
        headers: {
          'Content-Type': 'application/json',
        },
      })
      getcontactList() 
      setEditing({ id: null, field: '' }); 
    }

  return (
    <div className="contact-list">
    <h2 className='text-center'>{!user ? "No has seleccionado usuario" : `Lista de contactos de ${user}`}</h2>
    {contacts.length === 0 ? (
      <p className='text-center'>No hay contactos disponibles.</p>
    ) : (
      <ul className='list-unstyled'>
        {contacts.map((contact) => (
            <li key={contact.id} className="p-2 d-flex justify-content-between align-items-center">
            <div className="flex-grow-1">
            <div className="data-field">
                <strong>Nombre:</strong>
                {editing.id === contact.id && editing.field === 'name' ? ( 
                  <input
                    type="text"
                    value={editedValue} 
                    onChange={(e) => setEditedValue(e.target.value)}
                    onKeyDown={(e) => {if (e.key === 'Enter') {editcontact(contact.id, 'name')}}} 
                    onBlur={() => setEditing({ id: null, field: '' })} 
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'name' }); 
                    setEditedValue(contact.name); 
                  }}> {contact.name}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
              <div className="data-field">
                <strong>Teléfono:</strong>
                {editing.id === contact.id && editing.field === 'phone' ? ( 
                  <input
                  type="text"
                  value={editedValue} 
                  onChange={(e) => setEditedValue(e.target.value)} 
                  onKeyDown={(e) => {if (e.key === 'Enter') {editcontact(contact.id, 'phone')}}} 
                  onBlur={() => setEditing({ id: null, field: '' })}
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'phone' });
                    setEditedValue(contact.phone);
                  }}> {contact.phone}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
              <div className="data-field">
                <strong>Email:</strong>
                {editing.id === contact.id && editing.field === 'email' ? ( 
                  <input
                  type="text"
                  value={editedValue} 
                  onChange={(e) => setEditedValue(e.target.value)} 
                  onKeyDown={(e) => {if (e.key === 'Enter') {editcontact(contact.id, 'email')}}} 
                  onBlur={() => setEditing({ id: null, field: '' })} 
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'email' });
                    setEditedValue(contact.email);
                  }}> {contact.email}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
              <div className="data-field">
                <strong>Dirección:</strong>
                {editing.id === contact.id && editing.field === 'address' ? ( 
                  <input
                  type="text"
                  value={editedValue} 
                  onChange={(e) => setEditedValue(e.target.value)} 
                  onKeyDown={(e) => {if (e.key === 'Enter') {editcontact(contact.id, 'address')}}} 
                  onBlur={() => setEditing({ id: null, field: '' })} 
                  />
                ) : (
                  <span onClick={() => { 
                    setEditing({ id: contact.id, field: 'address' });
                    setEditedValue(contact.address);
                  }}> {contact.address}</span> 
                )}
                <button className="btn btn-sm ms-0" id="pencil"><i className="bi bi-pencil"></i></button>
              </div>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => deletecontact(contact.id)}>
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default contactList