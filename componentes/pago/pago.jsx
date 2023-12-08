import React from 'react';
import './pago.css'; 
import { Link, useHistory } from 'react-router-dom';

const ConsultasFormulario = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };

  const validarFormulario = (e) => {
    e.preventDefault();

    const busqueda = document.getElementById("busqueda");
    const carrera = document.getElementById("carrera");

    if (busqueda.value.length > 10) {
      alert("ID o Nombre no es correcto");
      return false;
    }
    if (carrera.value.length < 5) {
      alert("La carrera no es válida");
      return false;
    }
    alert("Iniciando búsqueda");
  };

  return (
    <div>
      <button id="goHomeButton" onClick={goToHome}>Inicio</button>
      <header>
        <h1>Consultas</h1>
      </header>
      <div className="container">
        <form onSubmit={validarFormulario} id="form">
          <div className="form">
            <h2>Consulta de Información </h2>
            <div className="grupo">
              <input
                type="text"
                id="busqueda"
                name="busqueda"
                required
              />
              <span className="barra"></span>
              <label htmlFor="busqueda">Buscar por Nombre o ID:</label>
            </div>
            <div className="grupo">
              <input
                type="text"
                id="carrera"
                name="carrera"
                required
              />
              <span className="barra"></span>
              <label htmlFor="carrera">Carrera</label>
            </div>
            <div className="grupo">
              <input
                type="text"
                id="cargo"
                name="cargo"
                required
              />
              <span className="barra"></span>
              <label htmlFor="cargo">Cargo</label>
            </div>
            <button type="submit">Consultar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultasFormulario;
