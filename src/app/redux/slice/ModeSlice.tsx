

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface ModeState {
    value: "dark" | "light";
}

// Set the initial state
const initialState: ModeState = {
    value: "dark",
};

// Create a slice with reducers
const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            // Toggle between "darkmode" and "lightmode"
            state.value = state.value === "dark" ? "light" : "dark";
        },
    },
});

// Export the actions
export const { toggleMode } = modeSlice.actions;

// Export the reducer
export default modeSlice.reducer;
