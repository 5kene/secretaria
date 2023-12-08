import React, { useState } from 'react';
import './configuracion.css'; 
import { Link, useHistory } from 'react-router-dom';

const CitasFormulario = () => {
  const history = useHistory();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [mensajeResultado, setMensajeResultado] = useState('');

  React.useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('citasFormData')) || {};
    setNombre(storedData.nombre || '');
    setEmail(storedData.email || '');
    setFecha(storedData.fecha || '');
    setHora(storedData.hora || '');
  }, []);

  const goToHome = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || email === "" || fecha === "" || hora === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const expresionCorreo = /\S+@\S+\.\S+/;
    if (!expresionCorreo.test(email)) {
      alert("Ingrese una dirección de correo electrónico válida.");
      return;
    }

    const formData = { nombre, email, fecha, hora };
    localStorage.setItem('citasFormData', JSON.stringify(formData));

    setMensajeResultado(`Cita registrada: Nombre: ${nombre}, Correo Electrónico: ${email}, Fecha: ${fecha}, Hora:${hora}`);
    setNombre('');
    setEmail('');
    setFecha('');
    setHora('');
  };

  return (
    <div>
      <h1>Solicitud de Cita</h1>
      <div className="container">
      <Link to="/" className="goHomeLink">Inicio</Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required /><br /><br />

          <label htmlFor="email"><i className="fas fa-envelope"></i> Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

          <label htmlFor="fecha">Fecha de Cita:</label>
          <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required /><br /><br />

          <label htmlFor="hora">Hora de Cita:</label>
          <input type="time" id="hora" name="hora" value={hora} onChange={(e) => setHora(e.target.value)} required /><br /><br />

          <label htmlFor="aviso">Mensaje Adicional:</label><br />
          <textarea id="aviso" name="aviso" rows="4" cols="50"></textarea><br /><br />

          <button type="submit"> Solicitar Cita</button>
        </form>
        <p id="mensaje">{mensajeResultado}</p>
      </div>
    </div>
  );
};

export default CitasFormulario;
