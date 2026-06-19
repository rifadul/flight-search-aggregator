export interface FlightSearchParams {
    origin?: string;

    destination?: string;

    date?: string;

    passengers?: number;

    airline?: string;

    stops?: number;

    sortBy?: FlightSortOption;
}

export type FlightSortOption = 'price' | 'duration' | 'departure';
