import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NewContact from "./views/NewContact";
import DetalleContacto from "./views/DetalleContacto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-contact" element={<NewContact />} />
      <Route path="/detalle-de-contacto" element={<DetalleContacto />} />
    </Routes>
  </BrowserRouter>
);