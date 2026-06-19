import { AIRPORTS } from '@/constants/airports';

export function getAirport(airportCode: string) {
    return AIRPORTS.find((airport) => airport.code === airportCode);
}
