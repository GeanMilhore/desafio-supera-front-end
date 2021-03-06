import React from 'react';
import { resolvePath } from 'react-router-dom';

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [error, setError ] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  const request = React.useCallback(async(url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if(response.ok === false) throw new Error(json)
    } catch(err){
      setError(json)
      json = null
    }finally{
      setDados(json)
      setLoading(false)
      return {response, json}
    }
  }, [])

  return {
    dados, loading, error, request
  }
};

export default useFetch;