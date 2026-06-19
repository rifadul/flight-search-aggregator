'use client';

import { useState } from 'react';

import { Flight } from '@/types/flight';
import { SortOption } from '@/types/filter';

import FlightsSidebar from './flights-sidebar';
import { FlightResults } from './flight-results';

interface FlightsContentProps {
    flights: Flight[];
    origin: string;
    destination: string;
    date: string;
    passengers: number;
}

export function FlightsContent({
    flights,
    origin,
    destination,
    date,
    passengers,
}: FlightsContentProps) {
    const [sortBy, setSortBy] = useState<SortOption>('price-asc');

    const [airline, setAirline] = useState('all');

    const [stops, setStops] = useState('all');

    return (
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <aside>
                <FlightsSidebar
                    origin={origin}
                    destination={destination}
                    date={date}
                    passengers={passengers}
                    totalFlights={flights.length}
                    airline={airline}
                    setAirline={setAirline}
                    stops={stops}
                    setStops={setStops}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
            </aside>

            <section>
                <FlightResults
                    flights={flights}
                    airline={airline}
                    stops={stops}
                    sortBy={sortBy}
                />
            </section>
        </div>
    );
}
