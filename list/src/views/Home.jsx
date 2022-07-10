import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Searchbar from "../components/SearchBar";
import ContactCard from "../components/ContactCard";
import DetalleContacto from './DetalleContacto';
import "../styles/Home.css";
import { mockContacts } from "../mock/data";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [contacts, setcontacts] = useState(mockContacts);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setcontacts((prevcontacts) => [location.state, ...prevcontacts]);
      mockContacts.unshift(location.state);
    }
  }, []);

  const handleremove = (email) => {
    setcontacts((prevcontacts) =>
      prevcontacts.filter((contact) => contact.email !== email)
    );
    mockContacts = mockContacts.filter((contact) => contact.email !== email);
  };

  const handleSearch = (searchValue) => {
    setcontacts((prevcontacts) =>
      prevcontacts.filter((contact) => contact.email === searchValue)
    );
  };
  const feetBack = (e) => {
    e.preventDefault();
    setcontacts(mockContacts);
  };

  return (
    <div className="container">
      
      <NavBar />
      <Searchbar onSearch={handleSearch} backSearch={feetBack} />
      <div className="contacts-container">
        {contacts.map((value, index) => (
          <ContactCard
            key={`${value.email}_${index}`}
            ondelete={handleremove}
            contact={value}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;