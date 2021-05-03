import { cepURL } from './constants'

export const getAddress = async (cep: string) => {
  return await fetch(`${cepURL}/${cep}/json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json()
  })
}
