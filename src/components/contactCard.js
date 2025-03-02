import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const contactCard = ({ contact, deleteContact }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteContact(contact.id);
    setShowModal(false);
  };

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Link to={`/edit-contact/${contact.id}`}>Edit</Link>
      <button onClick={() => setShowModal(true)}>Delete</button>

      
      {showModal && (
        <div className="modal">
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default contactCard;
