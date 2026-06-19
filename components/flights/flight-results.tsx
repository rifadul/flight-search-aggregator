'use client';

import { useMemo, useState } from 'react';
import { Flight } from '@/types/flight';
import { SortOption } from '@/types/filter';
import { FlightList } from './flight-list';
import { SortDropdown } from './sort-dropdown';
import { AirlineFilter } from './airline-filter';
import { StopsFilter } from './stops-filter';

interface FlightResultsProps {
    flights: Flight[];
}

export function FlightResults({ flights }: FlightResultsProps) {
    const [sortBy, setSortBy] = useState<SortOption>('price-asc');
    const [airline, setAirline] = useState('all');
    const [stops, setStops] = useState('all');

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
            <div className="flex flex-wrap justify-end gap-4">
                <AirlineFilter value={airline} onChange={setAirline} />

                <StopsFilter value={stops} onChange={setStops} />

                <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            <FlightList flights={processedFlights} />
        </div>
    );
}
