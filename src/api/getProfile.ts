import { url } from './constants'

export const getProfile = async (userId: string) => {
  return await fetch(`${url}/usuarios/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json()
  })
}
