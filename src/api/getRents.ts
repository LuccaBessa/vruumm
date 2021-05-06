import { url } from './constants'

export const getRents = async (userId: string) => {
  return await fetch(`${url}/alugueis/?codigoUsuarioLocatario=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json()
  })
}
