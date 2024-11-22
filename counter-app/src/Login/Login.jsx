import React, { useState } from 'react';
import './Login/Login.css';

export const FirstApp = () => {
  const [formState, setFormState] = useState({
    usuario: '',
    contraseña: '',
  });

  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const toggleMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>

      <form>
        <div>
          <label>
            Usuario:
            <input
              type="text"
              name="usuario"
              value={formState.usuario}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Contraseña:
            <div style={{ position: 'relative' }}>
              <input
                type={mostrarContraseña ? 'text' : 'password'}
                name="contraseña"
                value={formState.contraseña}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={toggleMostrarContraseña}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {mostrarContraseña ? '🙈' : '👁️'}
              </button>
            </div>
          </label>
        </div>
      </form>

      <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white' }}>
        Ingresar
      </button>
    </div>
  );
};
