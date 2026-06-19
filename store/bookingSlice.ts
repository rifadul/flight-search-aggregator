import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFlight: null,
  passenger: null,
  bookingId: null,
  status: "idle",
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
});

export default bookingSlice.reducer;