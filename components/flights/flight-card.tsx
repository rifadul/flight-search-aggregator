import { Flight } from '@/types/flight';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatCurrency';
import { formatDuration } from '@/lib/formatDuration';
import { getAirline } from '@/lib/getAirline';
import { getAirport } from '@/lib/getAirport';

interface FlightCardProps {
    flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
    const airline = getAirline(flight.airlineId);

    const origin = getAirport(flight.originCode);

    const destination = getAirport(flight.destinationCode);

    return (
        <Card>
            {' '}
            <CardContent className="p-6">
                {' '}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {' '}
                    <div className="space-y-4">
                        {' '}
                        <div>
                            {' '}
                            <p className="font-semibold">{airline?.name} </p>
                            <p className="text-sm text-muted-foreground">
                                {flight.flightNumber}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="font-semibold">
                                    {new Date(
                                        flight.departureTime,
                                    ).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {origin?.code}
                                </p>
                            </div>

                            <div className="text-sm text-muted-foreground">
                                {formatDuration(flight.duration)}
                            </div>

                            <div>
                                <p className="font-semibold">
                                    {new Date(
                                        flight.arrivalTime,
                                    ).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {destination?.code}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {flight.stops === 0
                                ? 'Non-stop'
                                : `${flight.stops} Stop`}
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 lg:items-end">
                        <p className="text-2xl font-bold">
                            {formatCurrency(flight.price)}
                        </p>

                        <Button>Select Flight</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
