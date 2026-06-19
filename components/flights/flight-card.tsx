'use client';

import { Flight } from '@/types/flight';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatCurrency';
import { formatDuration } from '@/lib/formatDuration';
import { getAirline } from '@/lib/getAirline';
import { getAirport } from '@/lib/getAirport';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { selectFlight } from '@/store/bookingSlice';

interface FlightCardProps {
    flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const airline = getAirline(flight.airlineId);
    const origin = getAirport(flight.originCode);
    const destination = getAirport(flight.destinationCode);

    const handleSelectFlight = () => {
        dispatch(selectFlight(flight));
        router.push('/booking');
    };

    return (
        <Card className="transition-all hover:shadow-lg">
            <CardContent className="p-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ">
                                ✈
                            </div>

                            <div>
                                <p className="font-semibold">{airline?.name}</p>

                                <p className="text-sm text-muted-foreground">
                                    {flight.flightNumber}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div>
                                <p className="text-xl font-bold">
                                    Departure Time
                                </p>

                                <p className="text-muted-foreground">
                                    {origin?.code}
                                </p>
                            </div>

                            <div className="flex flex-1 flex-col items-center">
                                <p className="text-sm text-muted-foreground">
                                    {formatDuration(flight.duration)}
                                </p>

                                <div className="h-px w-full bg-border" />

                                <p className="text-xs text-muted-foreground">
                                    {flight.stops === 0
                                        ? 'Non-stop'
                                        : `${flight.stops} Stop`}
                                </p>
                            </div>

                            <div>
                                <p className="text-xl font-bold">
                                    Arrival Time
                                </p>

                                <p className="text-muted-foreground">
                                    {destination?.code}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-3 lg:items-end">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                Starting From
                            </p>

                            <p className="text-2xl font-bold text-primary">
                                {formatCurrency(flight.price)}
                            </p>
                            <p className="text-[0.625rem] tracking-wide text-muted-foreground">
                                Per Passenger
                            </p>
                        </div>

                        <Button size="lg" onClick={handleSelectFlight}>
                            Select Flight
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
