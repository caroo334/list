import React from "react";
import "../styles/DetalleContacto.css";
import { Link, useLocation } from "react-router-dom";

const DetalleContacto = () => {
  const location = useLocation();

  return (
      <div className="container-detail">
          <div className="container-draw1"></div>
          <div className="container-draw2"></div>
          <div className="container-draw3"></div>
          <div className="container-draw4"></div>
          <div className="container-draw5"></div>
          <div className="container-draw6"></div>
          <div className="container-draw7"></div>

    <main className="container-dc">
      <h1 className="tilte-details">Detalles del contacto:</h1>
      <div className="details-content">
        <span className="span-detail">{`Nombre: ${location.state.name}`}</span>
        <span className="span-detail">{`Apellido: ${location.state.lastName}`}</span>
        <span className="span-detail">{`  Email: ${location.state.email}`}</span>
      </div>

      <form className="container-button-detalle-contacto">
        <Link to={"/"}>
          <button className="button-detalle-contacto">Volver al Home</button>
        </Link>
      </form>
    </main>
      </div>
  );
};

export default DetalleContacto;