import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Flight } from '@/types/flight';
import { Passenger } from '@/types/booking';

export interface BookingState {
    selectedFlight: Flight | null;
    passenger: Passenger | null;
    bookingId: string | null;
    status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: BookingState = {
    selectedFlight: null,
    passenger: null,
    bookingId: null,
    status: 'idle',
};

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        selectFlight: (state, action: PayloadAction<Flight>) => {
            state.selectedFlight = action.payload;
        },

        setPassenger: (state, action: PayloadAction<Passenger>) => {
            state.passenger = action.payload;
        },

        setBookingSuccess: (state, action: PayloadAction<string>) => {
            state.bookingId = action.payload;

            state.status = 'success';
        },

        clearBooking: (state) => {
            state.selectedFlight = null;
            state.passenger = null;
            state.bookingId = null;
            state.status = 'idle';
        },
    },
});

export const { selectFlight, setPassenger, setBookingSuccess, clearBooking } =
    bookingSlice.actions;

export default bookingSlice.reducer;