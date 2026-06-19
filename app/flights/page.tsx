import { PageContainer, PageHeader } from '@/components/shared';
import { getFlights } from '@/services/flight.service';
import { FlightResults } from '@/components/flights/flight-results';

interface FlightsPageProps {
    searchParams: Promise<{
        origin?: string;
        destination?: string;
        date?: string;
        passengers?: string;
    }>;
}

export default async function FlightsPage({ searchParams }: FlightsPageProps) {
    const params = await searchParams;

    const flights = await getFlights({
        origin: params.origin,
        destination: params.destination,
    });

    return (
        <PageContainer>
            {' '}
            <div className="space-y-8 py-10">
                <PageHeader
                    title="Available Flights"
                    description={`${params.origin} → ${params.destination} • ${flights.length} flights found`}
                />
                <FlightResults flights={flights} />
            </div>
        </PageContainer>
    );
}
