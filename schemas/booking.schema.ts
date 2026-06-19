import { z } from 'zod';

export const bookingSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),

    email: z.string().email('Please enter a valid email'),

    phone: z.string().min(11, 'Please enter a valid phone number'),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
