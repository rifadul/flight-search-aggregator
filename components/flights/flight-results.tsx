'use client';

import { useMemo } from 'react';
import { Flight } from '@/types/flight';
import { SortOption } from '@/types/filter';
import { FlightList } from './flight-list';

interface FlightResultsProps {
    flights: Flight[];
    airline: string;
    stops: string;
    sortBy: SortOption;
}

export function FlightResults({
    flights,
    airline,
    stops,
    sortBy,
}: FlightResultsProps) {
    const processedFlights = useMemo(() => {
        let result = [...flights];

        // Airline Filter
        if (airline !== 'all') {
            result = result.filter((flight) => flight.airlineId === airline);
        }

        // Stops Filter
        if (stops !== 'all') {
            result = result.filter((flight) => flight.stops === Number(stops));
        }

        // Sorting
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;

            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;

            case 'duration-asc':
                result.sort((a, b) => a.duration - b.duration);
                break;
        }

        return result;
    }, [flights, airline, stops, sortBy]);

    return (
        <div className="space-y-6">
            <FlightList flights={processedFlights} />
        </div>
    );
}
