import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

function useAuth () {
  const [isAuth, setIsAuth] = useState(null)
  const getAuth = async () => {
    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token)
    if (decodedToken.user === 'mor_2314') {
      setIsAuth(true)
    } else {
      console.log('no es mor_2314')
      setIsAuth(false)
    }
  }

  useEffect(() => {
    getAuth()
  }, [])

  return {
    isAuth
  }
}

export default useAuth
