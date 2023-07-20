import LoginView from './LoginView'
// useForm Validaciones Joi, Celebrate
// zod: mas avanzado

function Login () {
  // logica para hacer login con fake JS
  // como hacer una llamada Asyncrona //
  const handledLoginSubmit = (e) => {
    e.preventDefault() // TODO
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form)
    const { password, username } = formData
    console.log({ formData })
    // TODO: CONSUMIR EL SERVICIO DE LOGIN DE FAKESTORE
    if (username === 'hola' && password === '123') {
      localStorage.setItem('token', '1234567890')
      window.location = '/cart'
    }
  }

  return (
  <>
    <LoginView handledLoginSubmit={handledLoginSubmit}/>
  </>
  )
}

export default Login
