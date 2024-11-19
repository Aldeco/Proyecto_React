// const getFullName = (nombre, apellido) => {

//   return nombre + " " + apellido;
// }

// export const FirstApp = () => {

//   return (
//     <>
//       <h1> { getFullName("Nico", "Galeano") } </h1>
//       <code> código </code>
//     </>
//   )
// }


// Esto no es del curso!
import React, { useState } from 'react';

export const FirstApp = () => {

  const [formState, setFormState] = useState({
    
    nombre: '',
    apellido: '',
  });

  const handleInputChange = (e) => {
    
    const { name, value } = e.target;
    
    setFormState({
    
      ...formState,
      [name]: value, 
    });
  };

  const getFullName = () => `${formState.nombre} ${formState.apellido}`;

  return (
    <>
      <h1>{getFullName()}</h1>

      <form>
        <div>
          <label> 
            Nombre:
            <input type="text" name="nombre" value={formState.nombre} onChange={handleInputChange}/>
          </label>
        </div>

        <div>
          <label>
            Apellido:
            <input type="text" name="apellido" value={formState.apellido} onChange={handleInputChange}/>
          </label>
        </div>
      </form>

      <code>código</code>
    </>
  );
};
