import { z } from 'zod';

export const flightSearchSchema = z
    .object({
        origin: z.string().min(1, 'Origin is required'),

        destination: z.string().min(1, 'Destination is required'),

        date: z.string().min(1, 'Departure date is required'),

        passengers: z.coerce.number().min(1).max(9),
    })
    .refine((data) => data.origin !== data.destination, {
        message: 'Origin and destination cannot be the same',
        path: ['destination'],
    });

export type FlightSearchFormValues = z.infer<typeof flightSearchSchema>;
