import { url } from './constants'

export const getRentsSummary = async (userId: string) => {
  return await fetch(`${url}/alugueis/resumo/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json()
  })
}
