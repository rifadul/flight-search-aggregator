import { NextResponse } from 'next/server';

import { getFlightById } from '@/services/flight.service';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    const flight = await getFlightById(id);

    if (!flight) {
        return NextResponse.json(
            {
                success: false,
                message: 'Flight not found',
            },
            { status: 404 },
        );
    }

    return NextResponse.json({
        success: true,
        data: flight,
    });
}
