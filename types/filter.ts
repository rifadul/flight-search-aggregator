export type SortOption = 'price-asc' | 'price-desc' | 'duration-asc';

export interface FlightFilters {
    airlineIds: string[];

    stops: number[];

    sortBy: SortOption;
}
