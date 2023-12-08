import React, { useState } from 'react';
import './sesion.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToHome = () => {
    // Redireccionar a la página de inicio
    window.location.href = "principal.html";
  };

  const submitForm = () => {

    if (email === "kenfael@gmail.com" && password === "contraseña") {
      alert("Inicio de sesión exitoso");
      // Redireccionar a la página de inicio, por ejemplo
      window.location.href = "principal.html";
    } else {
      alert("Inicio de sesión fallido. Verifica tus credenciales.");
    }
  };

  return (
    <div className="container">
      <div className="form-content">
        <button id="goHomeButton" onClick={goToHome}>Inicio</button>
        <h1 id="tittle" className="tittle">Iniciar sesión</h1>
        <form id="login-form">
          <div className="input-group">
            <div className="input-field">
              <input
                type="email"
                id="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="btn-field">
            <button id="signIn" type="button" onClick={submitForm}>Acceder</button>
            <a href="/registro">
              <button id="signUp" type="button">Registrarse</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
