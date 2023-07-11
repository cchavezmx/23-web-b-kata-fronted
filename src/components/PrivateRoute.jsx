import useAuth from '../hooks/useAuth'

function PrivateRoute ({ children }) {
  const { isAuth } = useAuth()

  if (isAuth === null) {
    return <h1>Cargando...</h1>
  }

  if (!isAuth) {
    window.location.href = '/login'
  } else {
    return children
  }
}

export default PrivateRoute
