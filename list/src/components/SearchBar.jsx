import React from "react";
import "../styles/SearchBar.css";
import { useState } from "react";

const SearchBar = ({onSearch, backSearch}) => {
  const [inputSearchBar, setInputSearchBar] = useState("");

  const handleInputChange = (e) => {
    setInputSearchBar(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    onSearch(inputSearchBar);
  };
 

  return (
    <div>
      <header className="container-search">
       <form onSubmit={handleClick}>
       <input
          value={inputSearchBar}
          type="text"
          className="input-search"
          placeholder="Buscar Aqui..."
          onChange={handleInputChange}
        />
         <button type="submit"  className="button-search">
          Buscar
        </button>
        <button onClick={backSearch} className="button-search">
          Limpiar Consola
        </button>
       </form>
      </header>
    </div>
  );
};

export default SearchBar;