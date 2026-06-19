import { FlightSearchForm } from '@/components/search/flight-search-form';
import { PageContainer } from '@/components/shared';

export default function HomePage() {
    return (
        <div className="bg-linear-to-b from-primary/5 via-background to-background">
            {' '}
            <PageContainer>
                {' '}
                <section className="py-20">
                    {' '}
                    <div className="mx-auto max-w-3xl text-center">
                        {' '}
                        <div className="inline-flex rounded-full border px-4 py-1 text-sm text-muted-foreground">
                            ✈ Smart Flight Search{' '}
                        </div>
                        <h1 className="mt-6 text-5xl font-bold tracking-tight">
                            Find Your Next Flight
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Search, compare and book flights across multiple
                            airlines in seconds.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 max-w-6xl">
                        <FlightSearchForm />
                    </div>
                </section>
                <section className="pb-20">
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-xl border p-6">
                            <h3 className="font-semibold">Best Prices</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Compare flight prices across multiple airlines.
                            </p>
                        </div>

                        <div className="rounded-xl border p-6">
                            <h3 className="font-semibold">Fast Search</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Instantly find flights that match your needs.
                            </p>
                        </div>

                        <div className="rounded-xl border p-6">
                            <h3 className="font-semibold">Easy Booking</h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Complete your booking with a simple flow.
                            </p>
                        </div>
                    </div>
                </section>
            </PageContainer>
        </div>
    );
}
