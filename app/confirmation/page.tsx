'use client';

import Link from 'next/link';
import { PageContainer, PageHeader } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppSelector } from '@/store/hooks';

export default function ConfirmationPage() {
    const booking = useAppSelector((state) => state.booking);

    return (
        <PageContainer>
            <div className="py-10">
                <Card>
                    <CardContent className="p-8 text-center space-y-6">
                        <div className="text-5xl">✈️</div>

                        <PageHeader
                            title="Booking Confirmed"
                            description="Your flight booking has been successfully completed."
                        />

                        <div className="space-y-2">
                            <p>Booking ID:</p>

                            <p className="font-bold text-lg">
                                {booking.bookingId}
                            </p>
                        </div>

                        <Button asChild>
                            <Link href="/">Search Another Flight</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </PageContainer>
    );
}
