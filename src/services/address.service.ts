import { cepURL } from './constants'

export class AddressService {
  public static async getAddress(cep: string) {
    return await fetch(`${cepURL}/${cep}/json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json()
    })
  }
}
