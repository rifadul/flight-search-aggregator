import { PageContainer, PageHeader } from '@/components/shared';
import { getFlights } from '@/services/flight.service';
import { FlightsContent } from '@/components/flights/flights-content';

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
    const { origin = '', destination = '', date = '', passengers = 1 } = params;

    const flights = await getFlights({
        origin: origin,
        destination: destination,
        date: date,
        passengers: Number(passengers),
    });

    return (
        <PageContainer>
            <div className="space-y-8 py-10">
                <PageHeader
                    title="Available Flights"
                    description={`${origin} → ${destination} • ${flights.length} flights found`}
                    showBackButton
                />
                <FlightsContent
                    flights={flights}
                    origin={origin}
                    destination={destination}
                    date={date}
                    passengers={Number(passengers)}
                />
            </div>
        </PageContainer>
    );
}
