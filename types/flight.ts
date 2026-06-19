export interface Airport {
    code: string;
    city: string;
    name: string;
}

export interface Airline {
    id: string;
    name: string;
    logo: string;
}

export type CabinClass = 'economy' | 'premium-economy' | 'business';

export interface Flight {
    id: string;

    flightNumber: string;

    airlineId: string;

    originCode: string;

    destinationCode: string;

    departureTime: string;

    arrivalTime: string;

    duration: number;

    stops: number;

    availableSeats: number;

    cabinClass: CabinClass;

    baggageCabin: string;

    baggageChecked: string;

    price: number;
}
