import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [url, setUrl] = useState('')
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!url) return
    setIsError(false)
    setIsLoading(true)

    fetch(url)
      .then(async (response) => {
        if (response.ok) {
          setData(await response.json())
        } else {
          setData(null)
        }
      })
      .catch((_) => {
        setIsError(true)
      })

    setIsLoading(false)
  }, [url])

  const fetchData = (url) => {
    setUrl(url)
  }

  return {
    data,
    isLoading,
    isError,
    fetchData,
  }
}
