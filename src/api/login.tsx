import { url } from './constants'

export const login = async (email: string, password: string) => {
    return await fetch(`${url}/usuarios/autenticacao`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "emailUsuario": email,
            "senhaUsuario": password
        }),
    })
        .then(response => {
            return response.json()
        })
}