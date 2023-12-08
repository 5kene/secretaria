// RegistroDatosFormulario.js
import React from 'react';
import './datos.css'; // Asegúrate de importar tu archivo CSS

const RegistroDatosFormulario = () => {
  const goToHome = () => {
    // Redireccionar a la página de inicio
    window.location.href = "principal.html";
  };

  const validarRegistroDatos = (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const cedula = document.getElementById("cedula").value;
    const email = document.getElementById("email").value;
    const facultad = document.getElementById("facultad").value;
    const cargo = document.getElementById("cargo").value;
    const materia = document.getElementById("materia").value;
    const edad = document.getElementById("edad").value;
    const celular = document.getElementById("celular").value;

    // Validar los datos del formulario
    if (nombre.length < 4) {
      alert("El nombre no es válido");
      return;
    }

    if (apellido.length < 4) {
      alert("El apellido no es válido");
      return;
    }

    if (cedula.length === 0 || isNaN(cedula)) {
      alert("La cédula no es válida");
      return;
    }

    // Verificar que el campo de correo electrónico tenga un formato válido
    const expresionCorreo = /\S+@\S+\.\S+/;
    if (!expresionCorreo.test(email)) {
      alert("Ingrese una dirección de correo electrónico válida.");
      return;
    }

    // Verificar que la edad sea un número válido
    if (isNaN(edad) || edad <= 18) {
      alert("Ingrese una edad válida.");
      return;
    }

    if (celular.length > 10 || isNaN(celular)) {
      alert("Número de celular inválido.");
      return;
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    alert("Ingresando datos");
  };

  return (
    <div className="container">
      <button id="goHomeButton" onClick={goToHome}>Inicio</button>
      <form onSubmit={validarRegistroDatos} id="form">
        <div className="form">
          <h1>Registro de Datos</h1>
          <div className="grupo">
            <input type="text" id="nombre" name="" required /><span className="barra"></span>
            <label htmlFor="">Nombre:</label>
          </div>
          <div className="grupo">
            <input type="text" name="" id="apellido" required /><span className="barra"></span>
            <label htmlFor="">Apellido</label>
          </div>
          <div className="grupo">
            <input type="text" name="" id="cedula" required /><span className="barra"></span>
            <label htmlFor="">Cedula</label>
          </div>
          <div className="grupo">
            <input type="email" name="" id="email" required /><span className="barra"></span>
            <label htmlFor="">Email</label>
          </div>
          <div className="grupo">
            <input type="text" name="" id="facultad" required /><span className="barra"></span>
            <label htmlFor="">Facultad</label>
          </div>
          <div className="grupo">
            <input type="text" name="" id="cargo" required /><span className="barra"></span>
            <label htmlFor="">Cargo</label>
          </div>
          <div className="grupo">
            <input type="text" name="" id="materia" required /><span className="barra"></span>
            <label htmlFor="">Materia</label>
          </div>
          <div className="grupo">
            <input type="number" name="" id="edad" required /><span className="barra"></span>
            <label htmlFor="">Edad</label>
          </div>
          <div className="grupo">
            <input type="tel" name="" id="celular" required /><span className="barra"></span>
            <label htmlFor="">Celular</label>
          </div>
          <button type="submit">Guardar</button>
          <p className="warnings" id="warnings"></p>
        </div>
      </form>
    </div>
  );
};

export default RegistroDatosFormulario;
