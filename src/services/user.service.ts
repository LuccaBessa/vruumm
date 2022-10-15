import { url } from './constants'

export class UserService {
  public static async getProfile(userId: string) {
    return await fetch(`${url}/usuarios/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json()
    })
  }

  public static async updateProfile(userId: string, body: object) {
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

  public static async signUp(name: string, email: string, password: string) {
    return await fetch(url + '/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "emailUsuario": email,
        "senhaUsuario": password,
        "nomeUsuario": name,
        "perfilUsuario": "LOCATARIO",
      }),
    })
      .then(response => {
        return response.json()
      })
  }

  public static async login(email: string, password: string) {
    return await fetch(`${url}/usuarios/autenticacao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "emailUsuario": email,
        "senhaUsuario": password,
        "perfilUsuario": "LOCATARIO"
      }),
    })
      .then(response => {
        return response.json()
      })
  }
}