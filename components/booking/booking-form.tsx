'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { BookingFormValues, bookingSchema } from '@/schemas/booking.schema';

import { useAppDispatch } from '@/store/hooks';
import { setBookingSuccess, setPassenger } from '@/store/bookingSlice';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';

// Define an API response interface to avoid type issues with 'result'
interface BookingApiResponse {
    bookingId: string;
}

export function BookingForm() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    // 1. Pass the clean input/output types directly to useForm to prevent validation discrepancies
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<
        z.input<typeof bookingSchema>,
        object,
        z.output<typeof bookingSchema>
    >({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
        },
    });

    // 2. Type 'values' strictly as the schema output so it compiles error-free
    const onSubmit = async (values: z.output<typeof bookingSchema>) => {
        // Cast values to BookingFormValues safely for Redux if required
        dispatch(setPassenger(values as BookingFormValues));

        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (!response.ok) {
            // Handle error states here if your API fails
            return;
        }

        const result = (await response.json()) as BookingApiResponse;
        dispatch(setBookingSuccess(result.bookingId));
        router.push('/confirmation');
    };

    return (
        <Card>
            <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* FULL NAME FIELD */}
                    <Field data-invalid={!!errors.fullName}>
                        <FieldLabel>Full Name</FieldLabel>
                        {/* 3. Removed unnecessary Controllers. Native Inputs work cleanly with standard register strings! */}
                        <Input
                            placeholder="Enter your full name"
                            {...register('fullName')}
                        />
                        <FieldError errors={[errors.fullName]} />
                    </Field>

                    {/* EMAIL FIELD */}
                    <Field data-invalid={!!errors.email}>
                        <FieldLabel>Email</FieldLabel>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            {...register('email')}
                        />
                        <FieldError errors={[errors.email]} />
                    </Field>

                    {/* PHONE NUMBER FIELD */}
                    <Field data-invalid={!!errors.phone}>
                        <FieldLabel>Phone Number</FieldLabel>
                        <Input
                            placeholder="01XXXXXXXXX"
                            {...register('phone')}
                        />
                        <FieldError errors={[errors.phone]} />
                    </Field>

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}>
                        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
