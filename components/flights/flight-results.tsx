'use client';

import { useMemo, useState } from 'react';
import { Flight } from '@/types/flight';
import { SortOption } from '@/types/filter';
import { FlightList } from './flight-list';
import { SortDropdown } from './sort-dropdown';

interface FlightResultsProps {
    flights: Flight[];
}

export function FlightResults({ flights }: FlightResultsProps) {
    const [sortBy, setSortBy] = useState<SortOption>('price-asc');

    const sortedFlights = useMemo(() => {
        const copiedFlights = [...flights];

        switch (sortBy) {
            case 'price-asc':
                return copiedFlights.sort((a, b) => a.price - b.price);

            case 'price-desc':
                return copiedFlights.sort((a, b) => b.price - a.price);

            case 'duration-asc':
                return copiedFlights.sort((a, b) => a.duration - b.duration);

            default:
                return copiedFlights;
        }
    }, [flights, sortBy]);

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            <FlightList flights={sortedFlights} />
        </div>
    );
}
