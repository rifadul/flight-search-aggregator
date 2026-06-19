import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

import { SearchSummary } from './search-summary';
import { AirlineFilter } from './airline-filter';
import { StopsFilter } from './stops-filter';
import { SortDropdown } from './sort-dropdown';

import { SortOption } from '@/types/filter';

interface FlightsSidebarProps {
    origin: string;
    destination: string;
    date: string;
    passengers: number;
    totalFlights: number;

    airline: string;
    setAirline: (value: string) => void;

    stops: string;
    setStops: (value: string) => void;

    sortBy: SortOption;
    setSortBy: (value: SortOption) => void;
}

export default function FlightsSidebar({
    origin,
    destination,
    date,
    passengers,
    totalFlights,

    airline,
    setAirline,

    stops,
    setStops,

    sortBy,
    setSortBy,
}: FlightsSidebarProps) {
    return (
        <div className="sticky top-24 space-y-6">
            {' '}
            <SearchSummary
                origin={origin}
                destination={destination}
                date={date}
                passengers={passengers}
                totalFlights={totalFlights}
            />
            <Card>
                <CardContent className="space-y-6 p-6">
                    <div>
                        <h3 className="mb-4 font-semibold">Filters</h3>

                        <div className="space-y-4">
                            <AirlineFilter
                                value={airline}
                                onChange={setAirline}
                            />

                            <StopsFilter value={stops} onChange={setStops} />
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="mb-4 font-semibold">Sort</h3>

                        <SortDropdown value={sortBy} onChange={setSortBy} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
