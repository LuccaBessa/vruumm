import { url } from './constants'

export const signUp = async (name: string, email: string, password: string) => {
    return await fetch(url + '/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "emailUsuario": email,
            "senhaUsuario": password,
            "nomeUsuario": name,
            "perfilUsuario": "LOCADOR",
        }),
    })
        .then(response => {
            return response.json()
        })
}