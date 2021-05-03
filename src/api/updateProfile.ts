import { url } from './constants'

export const updateProfile = async (userId: string, body: object) => {
  return await fetch(`${url}/usuarios/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json()
  })
}
