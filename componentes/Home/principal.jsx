import React from 'react';
import imagenes from './imagenes';
import './principal.css'; 
import { Link } from 'react-router-dom';

const PrincipalPage = () => {
  return (
    <div>
      <header>
        <img src={imagenes.img5} alt="" className="logo" />
        <h1>Secretaría ULEAM</h1>
        <nav className="navbar">
          <Link className='li-a' to="/login">iniciar secion</Link>
        </nav>
      </header>

      <div>
        <nav>
        <Link className='li-a' to="/regisdatos">Registro de Datos</Link>
          <Link className='li-a' to="/servicios">Servicios</Link>
          <Link className='li-a' to="/consulta">Consultas</Link>
        </nav>
      </div>

      <section className="inicio">
        <div className="secretaria-conten container">
          <h2>Universidad Eloy Alfaro de Manabi (ULEAM)</h2>
          <h3>Secretaria Virtual</h3>

          <p className="txt-p">
            Desde la ULEAM hemos dado un paso más en nuestro intento por estar a tu disposición a todo momento.
            Para ello hemos creado la Secretaría Virtual, desde donde podrás realizar trámites, gestiones y consultas
            telemáticamente sin que tengas que desplazarte. Entre los servicios que proporcionamos están:
          </p>
        </div>
      </section>

      <section className="servicios container">
        <div className="servicios-contenido">
          <div className="centrado">
            <div className="contenedor">
              <div className="fila">
              <div className="cuadro">
                  <img src={imagenes.img1} alt="" />
                  <p>Cita Previa</p>
                  <Link className='li-a' to="/cita">ACCEDER/</Link>
                </div>

                <div className="cuadro">
                  <img src="imagenes/certificado.jfif" alt="" />
                  <p className="parrafo_1">Certificado Académico</p>
                  <Link className='li-a' to="/servicios">ACCEDER/</Link>
                </div>

                <div className="cuadro">
                  <img src="imagenes/otros.jpg" alt="" />
                  <p className="parrafo">Otras Gestiones</p>
                  <Link className='li-a' to="/servicios">ACCEDER/</Link>
                </div>
              </div>

              <div className="fila">
                <div className="cuadro">
                  <img src="imagenes/estudiante.jpg" alt="" />
                  <p className="parrafo_2">Estudiantes</p>
                  <Link className='li-a' to="/servicios">ACCEDER/</Link>
                </div>

                <div className="cuadro">
                  <img src="imagenes/docente.png" alt="" />
                  <p>Docentes</p>
                  <Link className='li-a' to="/servicios">ACCEDER/</Link>
                </div>

                <div className="cuadro">
                  <img src="imagenes/egresados.jpeg" alt="" />
                  <p>Egresado</p>
                  <Link className='li-a' to="/servicios">ACCEDER/</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        &copy; 2023 Secretaría ULEAM. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default PrincipalPage;
