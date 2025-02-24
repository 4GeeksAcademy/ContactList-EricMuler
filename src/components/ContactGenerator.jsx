import { React, useContext, useState } from 'react';
import { ContactListContext, UserContext } from "../components/UserContext.jsx";
import {getContactList } from "./ContactList.jsx";

function ContactGenerator() {
        const [user, setUser] = useContext(UserContext);
        const [contacts, setContacts] = useContext(ContactListContext) 

        const [contactName, setContactName] = useState("");
        const [contactPhone, setContactPhone] = useState("");
        const [contactEmail, setContactEmail] = useState("");
        const [contactAddress, setContactAddress] = useState("");

        const getContactList = async(user, setContacts) => {
            if (!user) return;
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`);
            const data = await response.json();
            setContacts(data.contacts);
          }

    const createContact = async (userName,contactName,contactPhone,contactEmail,contactAddress) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${userName}/contacts`, {
            method: 'POST',
            body: JSON.stringify({ 
                name: contactName,
                phone: contactPhone,
                email: contactEmail,
                address: contactAddress
             }), 
            headers: {
              'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            console.log(`Error ${contact.status} al crear el contacto`) 
        }
        setContactName("") 
        setContactPhone("")
        setContactEmail("")
        setContactAddress("")
        getContactList(user, setContacts);
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        createContact(user, contactName, contactPhone, contactEmail, contactAddress)
    }
    
  return (
    <div className='contact-generator container mt-4'>
        <h2>{!user ? "" : "Añade un nuevo contacto a la lista"}</h2>
{!user ? "" :<form onSubmit={enviarDatos}>
  <div class="form-group">
    <label for="contactName">Nombre</label>
    <input type="text" className="form-control" id="contactName" value={contactName} placeholder="Añade un nombre" onChange={(e) => setContactName(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="contactPhone">Teléfono</label>
    <input type="text" className="form-control" id="contactPhone" value={contactPhone} placeholder="Añade un teléfono" onChange={(e) => setContactPhone(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="contactEmail">Email</label>
    <input type="text" className="form-control" id="contactEmail" value={contactEmail} placeholder="Añade un correo electrónico" onChange={(e) => setContactEmail(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="contactAddress">Dirección</label>
    <input type="text" className="form-control" id="contactAddress" value={contactAddress} placeholder="Añade una dirección" onChange={(e) => setContactAddress(e.target.value)} required/>
  </div>
  <button type="submit" class="btn btn-success mt-2">¡Crear!</button>
</form>}
    </div>
  )
}

export default ContactGenerator