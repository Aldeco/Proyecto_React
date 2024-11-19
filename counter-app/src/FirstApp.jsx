const getFullName = (nombre, apellido) => {

  return nombre + " " + apellido;
}

export const FirstApp = () => {
  return (
    <>
      <h1> { getFullName("Nico", "Galeano") } </h1>
      <code> código </code>
    </>
  )
}
