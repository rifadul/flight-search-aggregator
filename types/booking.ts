import { Flight } from './flight';
export interface Passenger {
    fullName: string;
    email: string;
    phone: string;
}

export interface BookingRequest {
    flightId: string;
    passenger: Passenger;
}

export interface BookingConfirmation {
    bookingId: string;
    createdAt: string;

    flight: Flight;

    passenger: Passenger;
}
