import bookingReducer, {
    selectFlight,
    clearBooking,
} from '@/store/bookingSlice';
import { Flight } from '@/types/flight';
import { describe, expect, it } from 'vitest';

describe('bookingSlice', () => {
    const flight = {
        id: 'FL-001',
        flightNumber: 'BG101',
    };

    it('should select a flight', () => {
        const state = bookingReducer(undefined, selectFlight(flight as Flight));

        expect(state.selectedFlight).toEqual(flight);
    });

    it('should clear booking', () => {
        const selectedState = bookingReducer(
            undefined,
            selectFlight(flight as Flight),
        );

        const clearedState = bookingReducer(selectedState, clearBooking());

        expect(clearedState.selectedFlight).toBeNull();
    });
});
