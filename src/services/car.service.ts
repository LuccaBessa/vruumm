import { Car } from '../types';
import { url } from './constants'

export class CarService {
  public static async searchCars(term: string): Promise<Car[]> {
    const resp = await fetch(
      `${url}/carros/buscaGenerica?termo=${term}&disponibilidade=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return JSON.parse(await resp.text()).corpo;
  }
}

