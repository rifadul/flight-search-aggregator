import { Card, CardContent } from '@/components/ui/card';

interface SearchSummaryProps {
    origin: string;
    destination: string;
    date: string;
    passengers: number;
    totalFlights: number;
}

export function SearchSummary({
    origin,
    destination,
    date,
    passengers,
    totalFlights,
}: SearchSummaryProps) {
    return (
        <Card>
            <CardContent className="py-2 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-xl font-bold">
                            {origin} → {destination}
                        </h2>

                        <p className="text-muted-foreground">
                            {date} • {passengers} Passenger(s)
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                            {totalFlights}
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Flights Found
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
