import flights from '@/data/flights.json';
import { Flight } from '@/types/flight';
import { FlightSearchParams } from '@/types/search';

export async function getFlights(
    params?: FlightSearchParams,
): Promise<Flight[]> {
    return flights as Flight[];
}

export async function getFlightById(id: string): Promise<Flight | undefined> {
    return (flights as Flight[]).find((flight) => flight.id === id);
}
