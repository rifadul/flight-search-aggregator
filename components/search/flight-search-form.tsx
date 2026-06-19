'use client';

import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AIRPORTS } from '@/constants/airports';
import {
    FlightSearchFormValues,
    flightSearchSchema,
} from '@/schemas/flight-search.schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { setSearchCriteria } from '@/store/bookingSlice';
import { useAppDispatch } from '@/store/hooks';

export function FlightSearchForm() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<
        z.input<typeof flightSearchSchema>,
        object,
        z.output<typeof flightSearchSchema>
    >({
        resolver: zodResolver(flightSearchSchema),
        defaultValues: {
            origin: 'DAC',
            destination: 'CXB',
            date: '',
            passengers: 1,
        },
    });

    const onSubmit = (values: FlightSearchFormValues) => {
        const params = new URLSearchParams({
            origin: values.origin,
            destination: values.destination,
            date: values.date,
            passengers: String(values.passengers),
        });

        dispatch(
            setSearchCriteria({
                origin: values.origin,
                destination: values.destination,
                date: values.date,
                passengers: values.passengers,
            }),
        );

        router.push(`/flights?${params.toString()}`);
    };

    return (
        <Card>
            <CardContent className="p-6">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {/* ORIGIN FIELD */}
                    <Field data-invalid={!!errors.origin}>
                        <FieldLabel>Origin</FieldLabel>
                        <Controller
                            control={control}
                            name="origin"
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Origin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {AIRPORTS.map((airport) => (
                                            <SelectItem
                                                key={airport.code}
                                                value={airport.code}>
                                                {airport.city} ({airport.code})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError errors={[errors.origin]} />
                    </Field>

                    {/* DESTINATION FIELD */}
                    <Field data-invalid={!!errors.destination}>
                        <FieldLabel>Destination</FieldLabel>
                        <Controller
                            control={control}
                            name="destination"
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Destination" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {AIRPORTS.map((airport) => (
                                            <SelectItem
                                                key={airport.code}
                                                value={airport.code}>
                                                {airport.city} ({airport.code})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError errors={[errors.destination]} />
                    </Field>

                    {/* DEPARTURE DATE FIELD */}
                    <Field data-invalid={!!errors.date}>
                        <FieldLabel>Departure Date</FieldLabel>
                        <input
                            type="date"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            {...register('date')}
                        />
                        <FieldError errors={[errors.date]} />
                    </Field>

                    {/* PASSENGERS FIELD */}
                    <Field data-invalid={!!errors.passengers}>
                        <FieldLabel>Passengers</FieldLabel>
                        <Controller
                            control={control}
                            name="passengers"
                            render={({ field }) => (
                                <Select
                                    onValueChange={(value) =>
                                        field.onChange(Number(value))
                                    }
                                    value={String(field.value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Passengers" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Array.from(
                                            { length: 9 },
                                            (_, index) => index + 1,
                                        ).map((count) => (
                                            <SelectItem
                                                key={count}
                                                value={String(count)}>
                                                {count}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        <FieldError errors={[errors.passengers]} />
                    </Field>

                    {/* SUBMIT BUTTON */}
                    <div className="flex items-end">
                        <Button type="submit" className="w-full">
                            Search Flights
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
