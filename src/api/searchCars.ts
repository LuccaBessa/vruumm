import { url } from './constants'

export const searchCars = async (term: string) => {
  return await fetch(
    `${url}/carros/buscaGenerica?termo=${term}&disponibilidade=true`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((response) => {
    return response.json()
  })
}
