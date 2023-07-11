import { useEffect, useState } from 'react'

// consumir una api
function useSWR ({ url = '' }) {
  console.log({ url })
  // buena practica
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = (URL) => {
    setLoading(true)
    // async await, Promisse =>
    fetch(URL, {
      method: 'GET'
    })
      .then(res => {
        console.log({ res })
        if (res.status !== 200) {
          throw new Error('Error fetch')
        }
        return res.json()
      })
      .then(json => {
        // console.log(json)
        setLoading(false)
        setData(json)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
        return err
      })
  }

  useEffect(() => {
    console.log('render')
    getData(url)
  }, [url])

  return {
    data,
    loading,
    error
  }
}

export default useSWR
