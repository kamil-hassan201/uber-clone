import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

const initialState: initialStateT = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action: PayloadAction<any>) => {
            state.origin = action.payload;
        },
        setDestination: (state, action: PayloadAction<any>) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action: PayloadAction<any>) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

// selectors
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation;

export default navSlice.reducer;
