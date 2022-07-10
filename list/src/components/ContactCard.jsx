import React from "react";
import "../styles/ContactCard.css";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ ondelete, contact }) => {
  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
    navigate('/detalle-de-contacto', {state: contact});
  }

  return (


    <main className="container-card">
      <section className="info-contact">
        <span className="N">{`${contact.name} ${contact.lastName}`}</span>
        <div className="container-email">
          <span className="email-card">{`${contact.email}`}</span>
        </div>
      </section>
      <section className="container-button">
        <button className="button" onClick={() => ondelete(contact.email)}>
          Delete
        </button>

          <button onClick={handleClick} className="button">Detalles del Contacto</button>
      </section>
    </main>
  );
};

export default ContactCard;