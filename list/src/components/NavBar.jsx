import React from "react";
import '../styles/NavBar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='container-nav'>
          <img src='' alt="Logo" className='img-nav' />
          <Link to='/new-contact' >

          <button  className='button-nav'>+</button>
          </Link>
      </nav>
    </div>
  );
};

export default NavBar;