// ServiciosFormulario.js
import React from 'react';
import './servicio.css'; // Asegúrate de importar tu archivo CSS

const ServiciosFormulario = () => {
  const goToHome = () => {
    // Redireccionar a la página de inicio
    window.location.href = "principal.html";
  };

  // Función para validar el formulario de envío de mensajes
  const validarFormularioMensajes = (e) => {
    e.preventDefault();
    const destinatario = document.getElementById("destinatario").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (destinatario.length < 4) {
      alert("El destinatario no es válido");
      return;
    }
    alert("Mensaje enviado con éxito.");
  };

  // Función para validar el formulario de consulta de información académica
  const validarFormularioInformacionAcademica = (e) => {
    e.preventDefault();
    const numeroEstudiante = document.getElementById("numeroEstudiante").value;
    const cedula = document.getElementById("cedula").value;

    if (cedula.length === 0 || isNaN(cedula)) {
      alert("La cédula no es válida");
      return;
    }
    if (numeroEstudiante.length < 5 || isNaN(numeroEstudiante)) {
      alert("El número de estudiante no es válido");
      return;
    }
    alert("Consulta realizada con éxito.");
  };

  // Función para validar el formulario de gestión de documentos
  const validarFormularioDocumentos = (e) => {
    e.preventDefault();
    const archivo = document.getElementById("archivo").files;
    const nombreDocumento = document.getElementById("nombreDocumento").value;

    if (!archivo.length) {
      alert("Debes seleccionar un archivo.");
      return;
    }
    if (nombreDocumento.length < 4) {
      alert("El nombre del documento no es válido.");
      return;
    }
    alert("Documento subido con éxito.");
  };

  // Función para validar el formulario de solicitud de documentos
  const validarFormularioSolicitudDocumentos = (e) => {
    e.preventDefault();
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const motivo = document.getElementById("motivo").value;

    if (tipoDocumento === "seleccionar") {
      alert("Debes seleccionar un tipo de documento.");
      return;
    }
    if (motivo.length < 4) {
      alert("El motivo de la solicitud no es válido.");
      return;
    }
    alert("Solicitud de documento enviada con éxito.");
  };

  // Función para validar el formulario de reserva de espacios
  const validarFormularioReservaEspacios = (e) => {
    e.preventDefault();
    const espacio = document.getElementById("espacio").value;
    const fechaReserva = document.getElementById("fechaReserva").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFin = document.getElementById("horaFin").value;

    if (espacio === "seleccionar") {
      alert("Debes seleccionar un espacio.");
      return;
    }
    if (fechaReserva === "") {
      alert("Debes seleccionar una fecha de reserva.");
      return;
    }
    if (horaInicio === "") {
      alert("Debes seleccionar una hora de inicio.");
      return;
    }
    if (horaFin === "" || horaFin <= horaInicio) {
      alert("La hora de finalización no es válida.");
      return;
    }

    // Validar que la fecha seleccionada sea un día de la semana (de lunes a viernes).
    const fechaSeleccionada = new Date(fechaReserva);
    const diaSemana = fechaSeleccionada.getDay(); // 0 para domingo, 1 para lunes, 2 para martes, etc.

    if (diaSemana === 0 || diaSemana === 6) {
      alert("La fecha seleccionada no es un día hábil. Por favor, selecciona un día de lunes a viernes.");
      return;
    }

    alert("Espacio reservado con éxito.");
  };

  return (
    <div>
      <button id="goHomeButton" onClick={goToHome}>Inicio</button>
      <header>
        <h1>Servicios</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#mensajes">Envío de Mensajes</a></li>
          <li><a href="#documentos">Gestión de Documentos</a></li>
          <li><a href="#informacion-academica">Consulta de Información Académica</a></li>
          <li><a href="#solicitud-documentos">Solicitud de Documentos</a></li>
          <li><a href="#reserva-espacios">Reserva de Espacios</a></li>
        </ul>
      </nav>
      <section id="mensajes">
        <form onSubmit={validarFormularioMensajes}>
          <div className="form">
            <h2>Envío de Mensajes</h2>
            <div className="grupo">
              <input type="text" id="destinatario" name="destinatario" required /><span className="barra"></span>
              <label htmlFor="destinatario">Destinatario</label>
            </div>
            <div className="grupo">
              <input type="text" id="asunto" name="asunto" required /><span className="barra"></span>
              <label htmlFor="asunto">Asunto:</label>
            </div>
            <div className="grupo">
              <textarea id="mensaje" name="mensaje" required></textarea><span className="barra"></span>
              <label htmlFor="mensaje">Mensaje:</label>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </div>
        </form>
      </section>
      <section id="documentos">
        <form onSubmit={validarFormularioDocumentos} encType="multipart/form-data">
          <div className="form">
            <h2>Gestión de Documentos</h2>
            <div className="grupo">
              <input type="file" id="archivo" name="archivo" required /><span className="barra"></span>
              <label htmlFor="archivo">Seleccionar Archivo:</label>
            </div>
            <div className="grupo">
              <input type="text" id="nombreDocumento" name="nombreDocumento" required /><span className="barra"></span>
              <label htmlFor="nombreDocumento">Nombre del Documento</label>
            </div>
            <button type="submit">Subir Documento</button>
          </div>
        </form>
      </section>
      <section id="informacion-academica">
        <form onSubmit={validarFormularioInformacionAcademica}>
          <div className="form">
            <h2>Consulta de Información Académica</h2>
            <p>Ingresa tu número de estudiante y cédula para consultar tu información académica</p>
            <div className="grupo">
              <input type="text" id="numeroEstudiante" name="numeroEstudiante" required /><span className="barra"></span>
              <label htmlFor="numeroEstudiante">Número de Estudiante</label>
            </div>
            <div className="grupo">
              <input type="text" id="cedula" name="cedula" required /><span className="barra"></span>
              <label htmlFor="cedula">Cédula</label>
            </div>
            <button type="submit">Consultar</button>
          </div>
        </form>
      </section>
      <section id="solicitud-documentos">
        <form onSubmit={validarFormularioSolicitudDocumentos}>
          <div className="form">
            <h2>Solicitud de Documentos</h2>
            <p>Completa el formulario para solicitar un documento académico</p>
            <div className="grupo">
              <select id="tipoDocumento" name="tipoDocumento">
                <option value="certificado">Certificado</option>
                <option value="diploma">Diploma</option>
                <option value="constancia-estudios">Constancia de Estudios</option>
                <option value="historial-academico">Historial Académico</option>
                <option value="credenciales">Credenciales</option>
              </select><span className="barra"></span>
              <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            </div>
            <div className="grupo">
              <textarea id="motivo" name="motivo" required></textarea><span className="barra"></span>
              <label htmlFor="motivo">Motivo de la Solicitud</label>
            </div>
            <button type="submit">Enviar Solicitud</button>
          </div>
        </form>
      </section>
      <section id="reserva-espacios">
        <form onSubmit={validarFormularioReservaEspacios}>
          <div className="form">
            <h2>Reserva de Espacios</h2>
            <p>Selecciona el espacio, fecha y horario que deseas reservar</p>
            <div className="grupo">
              <select id="espacio" name="espacio">
                <option value="aula101">Aula 101</option>
                <option value="sala-reuniones">Sala de Reuniones</option>
                <option value="aula305">Aula 305</option>
                <option value="auditorio">Auditorio</option>
              </select><span className="barra"></span>
              <label htmlFor="espacio">Espacio a Reservar:</label>
            </div>
            <div className="grupo">
              <input type="date" id="fechaReserva" name="fechaReserva" required /><span className="barra"></span>
              <label htmlFor="fechaReserva">Fecha de Reserva:</label>
            </div>
            <div className="grupo">
              <input type="time" id="horaInicio" name="horaInicio" required /><span className="barra"></span>
              <label htmlFor="horaInicio">Hora de Inicio:</label>
            </div>
            <div className="grupo">
              <input type="time" id="horaFin" name="horaFin" required /><span className="barra"></span>
              <label htmlFor="horaFin">Hora de Finalización:</label>
            </div>
            <button type="submit">Reservar Espacio</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServiciosFormulario;
