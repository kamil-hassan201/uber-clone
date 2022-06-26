import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface initialStateT {
    origin: string | null;
    destination: string | null;
    travelTimeInformation: string | null;
}

const initialState: initialStateT = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action: PayloadAction<string>) => {
            state.origin = action.payload;
        },
        setDestination: (state, action: PayloadAction<string>) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action: PayloadAction<string>) => {
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
