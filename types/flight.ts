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

export type CabinClass =
  | "economy"
  | "premium-economy"
  | "business";

  export interface Flight {
  id: string;

  flightNumber: string;

  airline: Airline;

  origin: Airport;

  destination: Airport;

  departureTime: string;

  arrivalTime: string;

  duration: number;

  stops: number;

  availableSeats: number;

  cabinClass: CabinClass;

  baggage: {
    cabin: string;
    checked: string;
  };

  price: {
    amount: number;
    currency: "BDT";
  };
}