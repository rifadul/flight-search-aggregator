import { NextResponse } from 'next/server';

import { getFlights } from '@/services/flight.service';

export async function GET() {
    const flights = await getFlights();

    return NextResponse.json({
        success: true,
        total: flights.length,
        data: flights,
    });
}
