'use client';

import { Flight } from '@/types/flight';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatCurrency';
import { formatDuration } from '@/lib/formatDuration';
import { getAirline } from '@/lib/getAirline';
import { getAirport } from '@/lib/getAirport';
import { useAppSelector } from '@/store/hooks';

interface BookingSummaryProps {
    flight: Flight;
}

export function BookingSummary({ flight }: BookingSummaryProps) {
    const airline = getAirline(flight.airlineId);

    const origin = getAirport(flight.originCode);

    const destination = getAirport(flight.destinationCode);

    const searchCriteria = useAppSelector(
        (state) => state.booking.searchCriteria,
    );

    const passengerCount = searchCriteria?.passengers ?? 1;

    const totalPrice = flight.price * passengerCount;

    return (
        <Card className="sticky top-6">
            <CardContent className="p-6">
                <div className="space-y-5">
                    <h2 className="text-xl font-semibold">Selected Flight</h2>

                    <div>
                        <p className="font-medium">{airline?.name}</p>

                        <p className="text-sm text-muted-foreground">
                            {flight.flightNumber}
                        </p>
                    </div>

                    <div>
                        <p className="font-medium">
                            {origin?.city} ({origin?.code}) →{' '}
                            {destination?.city} ({destination?.code})
                        </p>
                    </div>

                    {searchCriteria?.date && (
                        <div className="flex justify-between">
                            <span>Date</span>

                            <span>{searchCriteria.date}</span>
                        </div>
                    )}

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
                        <span>Passengers</span>

                        <span>{passengerCount}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Price Per Passenger</span>

                        <span>{formatCurrency(flight.price)}</span>
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">Total Price</span>

                            <span className="text-xl font-bold text-primary">
                                {formatCurrency(totalPrice)}
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
