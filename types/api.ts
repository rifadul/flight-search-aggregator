import { Flight } from './flight';

export interface FlightsResponse {
    success: boolean;
    total: number;
    data: Flight[];
}

export interface FlightResponse {
    success: boolean;
    data: Flight;
}

export interface BookingResponse {
    success: boolean;
    bookingId: string;
}
