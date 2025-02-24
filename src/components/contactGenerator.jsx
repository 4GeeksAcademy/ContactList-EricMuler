import { React, useContext, useState } from 'react';
import { contactListContext, UserContext } from "./UserContext.jsx";
import {getcontactList } from "./contactList.jsx";

function contactGenerator() {
        const [user, setUser] = useContext(UserContext);
        const [contacts, setcontacts] = useContext(contactListContext) 

        const [contactName, setcontactName] = useState("");
        const [contactPhone, setcontactPhone] = useState("");
        const [contactEmail, setcontactEmail] = useState("");
        const [contactAddress, setcontactAddress] = useState("");

        const getcontactList = async(user, setcontacts) => {
            if (!user) return;
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/${user}`);
            const data = await response.json();
            setcontacts(data.contacts);
          }

    const createcontact = async (userName,contactName,contactPhone,contactEmail,contactAddress) => {
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
        setcontactName("") 
        setcontactPhone("")
        setcontactEmail("")
        setcontactAddress("")
        getcontactList(user, setcontacts);
    }

    const enviarDatos = (e) => {
        e.preventDefault();
        createcontact(user, contactName, contactPhone, contactEmail, contactAddress)
    }
    
  return (
    <div className='contact-generator container mt-4'>
        <h2>{!user ? "" : "Añade un nuevo contacto a la lista"}</h2>
{!user ? "" :<form onSubmit={enviarDatos}>
  <div class="form-group">
    <label for="contactName">Nombre</label>
    <input type="text" className="form-control" id="contactName" value={contactName} placeholder="Añade un nombre" onChange={(e) => setcontactName(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="contactPhone">Teléfono</label>
    <input type="text" className="form-control" id="contactPhone" value={contactPhone} placeholder="Añade un teléfono" onChange={(e) => setcontactPhone(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="contactEmail">Email</label>
    <input type="text" className="form-control" id="contactEmail" value={contactEmail} placeholder="Añade un correo electrónico" onChange={(e) => setcontactEmail(e.target.value)} required/>
  </div>
  <div class="form-group">
    <label for="contactAddress">Dirección</label>
    <input type="text" className="form-control" id="contactAddress" value={contactAddress} placeholder="Añade una dirección" onChange={(e) => setcontactAddress(e.target.value)} required/>
  </div>
  <button type="submit" class="btn btn-success mt-2">¡Crear!</button>
</form>}
    </div>
  )
}

export default contactGenerator