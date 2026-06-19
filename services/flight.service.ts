import flights from '@/data/flights.json';
import { Flight } from '@/types/flight';
import { FlightSearchParams } from '@/types/search';

export async function getFlights(
    params?: FlightSearchParams,
): Promise<Flight[]> {
    let filteredFlights = flights as Flight[];

    // 1. Filter by Origin Airport
    if (params?.origin) {
        filteredFlights = filteredFlights.filter(
            (flight) => flight.originCode === params.origin,
        );
    }

    // 2. Filter by Destination Airport
    if (params?.destination) {
        filteredFlights = filteredFlights.filter(
            (flight) => flight.destinationCode === params.destination,
        );
    }

    // 3. Filter by Departure Date
    if (params?.date) {
        const searchDate = params.date;
        filteredFlights = filteredFlights.filter((flight) =>
            flight.departureTime.startsWith(searchDate),
        );
    }

    // 4. Filter by Passenger Capacity
    if (params?.passengers) {
        const requiredSeats = Number(params.passengers);
        filteredFlights = filteredFlights.filter(
            (flight) => flight.availableSeats >= requiredSeats,
        );
    }

    return filteredFlights;
}

export async function getFlightById(id: string): Promise<Flight | undefined> {
    return (flights as Flight[]).find((flight) => flight.id === id);
}
