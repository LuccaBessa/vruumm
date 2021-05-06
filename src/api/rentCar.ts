import { url } from './constants'

export const rentCar = async (
  startDate: string,
  endDate: string,
  carId: number,
  userId: number,
) => {
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
