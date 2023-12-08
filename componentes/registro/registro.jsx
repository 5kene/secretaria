import React, { useState } from 'react';
import './registro.css'; 

const RegistroFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    email: '',
    password: '',
    password2: '',
  });

  const [advertencias, setAdvertencias] = useState('');

  const manejarCambioInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    let nuevasAdvertencias = '';
    let entrar = false;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (formData.nombre.length < 4) {
      nuevasAdvertencias += `El nombre no es válido <br>`;
      entrar = true;
    }

    if (formData.apellido.length < 5) {
      nuevasAdvertencias += `El apellido no es válido <br>`;
      entrar = true;
    }

    if (!regexEmail.test(formData.email)) {
      nuevasAdvertencias += `El correo electrónico no es válido <br>`;
      entrar = true;
    }

    if (formData.password.length < 8) {
      nuevasAdvertencias += `La contraseña no es válida <br>`;
      entrar = true;
    }

    if (!/[A-Z]/.test(formData.password)) {
      nuevasAdvertencias += `La contraseña debe tener una mayúscula <br>`;
      entrar = true;
    }

    if (formData.password !== formData.password2) {
      nuevasAdvertencias += `Las contraseñas no coinciden <br>`;
      entrar = true;
    }

    setAdvertencias(nuevasAdvertencias);

    if (!entrar) {
      // Almacenar en localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      setAdvertencias('Enviado');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div className="form">
        <h1>Registro</h1>
        <div className="grupo">
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={manejarCambioInput}
          />
          <span className="barra"></span>
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="grupo">
          <input
            type="text"
            id="apellido"
            value={formData.apellido}
            onChange={manejarCambioInput}
          />
          <span className="barra"></span>
          <label htmlFor="apellido">Apellido</label>
        </div>
        <div className="grupo">
          <input
            type="text"
            id="cedula"
            value={formData.cedula}
            onChange={manejarCambioInput}
          />
          <span className="barra"></span>
          <label htmlFor="cedula">Cedula</label>
        </div>
        <div className="grupo">
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={manejarCambioInput}
          />
          <span className="barra"></span>
          <label htmlFor="email">Email</label>
        </div>
        
        <div className="grupo">
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={manejarCambioInput}
          />
          <span className="barra"></span>
          <label htmlFor="password">Contraseña</label>
        </div>
        <div className="grupo">
          <input
            type="password"
            id="password2"
            value={formData.password2}
            onChange={manejarCambioInput}
          />
          <span className="barra"></span>
          <label htmlFor="password2">Repita Contraseña</label>
        </div>
        <button type="submit">Registrarse</button>
        <p
          className="advertencias"
          dangerouslySetInnerHTML={{ __html: advertencias }}
        ></p>
      </div>
    </form>
  );
};

export default RegistroFormulario;

