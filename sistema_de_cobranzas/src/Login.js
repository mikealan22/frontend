import React, { useState } from 'react';
import './style/Login.css'; // Asegúrate de que la ruta sea correcta

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifica las credenciales (usuario y contraseña)
    if (username === 'mikealan' && password === '123456') {
      onLogin(); // Llama a la función onLogin para indicar el inicio de sesión exitoso
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Acerca de</a>
          <a href="#">Servicio</a>
          <a href="#">Contacto</a>
        </nav>
        <div className="search">
          <input type="text" placeholder="Buscar..." />
          <a>
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </header>
      <div className="background"></div>
      <section className="home">
        <div className="content">
          <a href="#" className="logo">
            CIMFA CENTRAL - CNS
          </a>
          <h2>¡Bienvenido!</h2>
          <h3>Sistema de Cobranzas</h3>
          <pre>Sistema Unico de Cobranzas del CIMFA Central Regional La Paz</pre>
          <div className="icon">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
        <div className="login">
          <h2>Iniciar Sesion</h2>
          <div className="input">
            <input
              type="text"
              className="input1"
              placeholder="Usuario"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="input">
            <input
              type="password"
              className="input1"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="check">
            <label>
              <input type="checkbox" /> Recuerdame
            </label>
          </div>
          <div className="forgot-password">
            <a className="forgot-link" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="button">
            <button className="btn" onClick={handleLogin}>
              Iniciar Sesion
            </button>
          </div>
          <div className="sign-up">
            <p>¿No tienes una cuenta?</p>
            <a href="#">Registrarte</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

