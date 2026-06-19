'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PageContainer, PageHeader } from '@/components/shared';
import { BookingForm } from '@/components/booking/booking-form';
import { BookingSummary } from '@/components/booking/booking-summary';
import { useAppSelector } from '@/store/hooks';

export default function BookingPage() {
    const router = useRouter();

    const selectedFlight = useAppSelector(
        (state) => state.booking.selectedFlight,
    );

    useEffect(() => {
        if (!selectedFlight) {
            router.push('/');
        }
    }, [selectedFlight, router]);

    if (!selectedFlight) {
        return null;
    }

    return (
        <PageContainer>
            <div className="space-y-8 py-10">
                <PageHeader
                    title="Complete Your Booking"
                    description="Review your flight and enter passenger information."
                    showBackButton
                />

                <div className="grid gap-8 lg:grid-cols-2">
                    <BookingSummary flight={selectedFlight} />

                    <BookingForm />
                </div>
            </div>
        </PageContainer>
    );
}
