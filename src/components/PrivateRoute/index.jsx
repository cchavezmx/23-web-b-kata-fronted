// TODO: otro servicio donde yo valide el token JWT

function PrivateRoute ({ children }) {
  // verificar que el usuario este logeado
  // JWT sea valido
  const token = localStorage.getItem('token')

  if (token) {
    return children
  }

  if (!token) {
    window.location = '/login'
  }
}

export default PrivateRoute
