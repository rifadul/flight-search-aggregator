import { Flight } from '@/types/flight';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatCurrency';
import { formatDuration } from '@/lib/formatDuration';
import { getAirline } from '@/lib/getAirline';
import { getAirport } from '@/lib/getAirport';

interface BookingSummaryProps {
    flight: Flight;
}

export function BookingSummary({ flight }: BookingSummaryProps) {
    const airline = getAirline(flight.airlineId);

    const origin = getAirport(flight.originCode);

    const destination = getAirport(flight.destinationCode);

    return (
        <Card className="sticky top-6">
            {' '}
            <CardContent className="p-6">
                {' '}
                <div className="space-y-4">
                    {' '}
                    <h2 className="text-xl font-semibold">Flight Summary </h2>
                    <div>
                        <p className="font-medium">{airline?.name}</p>

                        <p className="text-sm text-muted-foreground">
                            {flight.flightNumber}
                        </p>
                    </div>
                    <div>
                        <p>
                            {origin?.city} ({origin?.code}) →{' '}
                            {destination?.city} ({destination?.code})
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <span>Duration</span>

                        <span>{formatDuration(flight.duration)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Stops</span>

                        <span>
                            {flight.stops === 0
                                ? 'Non-stop'
                                : `${flight.stops} Stop`}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Price</span>

                        <span className="font-semibold">
                            {formatCurrency(flight.price)}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
