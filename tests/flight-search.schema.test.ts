import { describe, expect, it } from 'vitest';

import { flightSearchSchema } from '@/schemas/flight-search.schema';

describe('flightSearchSchema', () => {
    it('accepts valid flight search data', () => {
        const result = flightSearchSchema.safeParse({
            origin: 'DAC',
            destination: 'CXB',
            date: '2026-07-01',
            passengers: 2,
        });

        expect(result.success).toBe(true);
    });

    it('rejects empty origin', () => {
        const result = flightSearchSchema.safeParse({
            origin: '',
            destination: 'CXB',
            date: '2026-07-01',
            passengers: 1,
        });

        expect(result.success).toBe(false);
    });

    it('rejects empty destination', () => {
        const result = flightSearchSchema.safeParse({
            origin: 'DAC',
            destination: '',
            date: '2026-07-01',
            passengers: 1,
        });

        expect(result.success).toBe(false);
    });

    it('rejects passengers less than 1', () => {
        const result = flightSearchSchema.safeParse({
            origin: 'DAC',
            destination: 'CXB',
            date: '2026-07-01',
            passengers: 0,
        });

        expect(result.success).toBe(false);
    });
});
