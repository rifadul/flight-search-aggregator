import { Flight } from '@/types/flight';
import { EmptyState } from '@/components/shared';
import { FlightCard } from './flight-card';

interface FlightListProps {
    flights: Flight[];
}

export function FlightList({ flights }: FlightListProps) {
    if (!flights.length) {
        return (
            <EmptyState
                title="No flights found"
                description="Try changing your search criteria."
            />
        );
    }

    return (
        <div className="space-y-4">
            {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
            ))}{' '}
        </div>
    );
}
