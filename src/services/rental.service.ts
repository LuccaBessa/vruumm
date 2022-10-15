import { url } from './constants'

export class RentalService {
  public static async rentCar(
    startDate: string,
    endDate: string,
    carId: number,
    userId: number,
  ) {
    return await fetch(`${url}/alugueis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dataInicioReserva: startDate,
        dataFimReserva: endDate,
        codigoCarroQueSeraAlugado: carId,
        codigoUsuarioLocatario: userId,
      }),
    }).then((response) => {
      return response.json()
    })
  }

  public static async getRents(userId: string) {
    const resp = await fetch(`${url}/alugueis/?codigoUsuarioLocatario=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return JSON.parse(await resp.text()).corpo;
  }

  public static async getRentsSummary(userId: string) {
    return await fetch(`${url}/alugueis/resumo/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json()
    })
  }
}