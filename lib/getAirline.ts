import { AIRLINES } from '@/constants/airlines';

export function getAirline(airlineId: string) {
    return AIRLINES.find((airline) => airline.id === airlineId) ?? null;
}
