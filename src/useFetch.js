import { useEffect, useState } from "react"

export default function useFetch(url) {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const abortCtrl = new AbortController()
    fetch(url, { signal: abortCtrl.signal })
      .then(res => {
        if (!res.ok) {
          throw new Error('server error')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setError(null)
        setIsLoading(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch abort')
        } else {
          setError(err.message)
          setIsLoading(false)
        }
      })

      return () => abortCtrl.abort()
  }, [url])

  return { data, isLoading, error }
}