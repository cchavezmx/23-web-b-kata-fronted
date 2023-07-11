import LoginView from './LoginView'
import { API_URL } from '../../config/CONST'
import useAuth from '../../hooks/useAuth'

function Login () {
  const { isAuth } = useAuth()

  const handledLoginSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const { user, password } = Object.fromEntries(form)
    fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: user, password })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.token) {
          localStorage.setItem('token', data.token)
          window.location.href = '/user'
        }
      })
      .catch(err => {
        console.error(err)
        window.location.href = '/login'
      })
  }

  if (isAuth) {
    window.location.href = '/user'
  }

  return <LoginView handledLoginSubmit={handledLoginSubmit} />
}

export default Login
