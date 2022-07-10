import React, {useState} from "react";
import "../styles/NewContact.css";
import { useNavigate} from 'react-router-dom';

const NewContact = () => {
    const navigator = useNavigate();

    const [inputName, setInputName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputemail, setInputEmail] = useState('');


    const handleChangeInputName = (C)=>{
        setInputName(C.target.value)
    }
    const handleChangeInputLastName = (C)=>{
        setInputLastName(C.target.value)
    }
    const handleChangeInputemail = (C)=>{
        setInputEmail(C.target.value)
    }

    const handleSubmit = (a) => {
        a.preventDefault()
        const newContact = {
            name: inputName,
            lastname: inputLastName,
            email: inputemail
            
        }
        navigator('/', {
            state:newContact
        })
    }
  return (
    <div className="container-newcontact">
      <h1 className="title-contact">Nuevo Amigo</h1>
      <form  onSubmit={handleSubmit} className="form-newcontact">
        <label htmlFor="label-id"></label>
        <input
          id="label-id"
          className="input-contact"
          placeholder="    Nombre🤔"
          value={inputName}
          onChange={handleChangeInputName}
        />

        <label htmlFor="label-id1"></label>
        <input
          id="label-id1"
          className="input-contact"
          placeholder="    Apellido👈🏼"
          value={inputLastName}
          onChange={handleChangeInputLastName}
        />

        <label htmlFor="label-id2"> </label>
        <input
          id="label-id2"
          className="input-contact"
          placeholder="    Email👀"
          value={inputemail}
          onChange={handleChangeInputemail}
        />

        <button type='submit' className="contact-button">Agregar Amigo</button>
      </form>
    </div>
  );
};

export default NewContact;