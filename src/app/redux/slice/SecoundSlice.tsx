import { createSlice } from "@reduxjs/toolkit";


interface initialStatetype {
    value?: number | undefined | any
}

const initialState: initialStatetype = {
    value: 1
}


const Secoundslice = createSlice({
    name: 'manish',
    initialState,
    reducers: {
        increment1: (increment) => {
            increment.value *= 80
        },
        decrement1: (decrement) => {
            decrement.value -= 80
        },
        both: (both, action) => {
            both.value *= action.payload
        }
    }
})


export const { increment1, decrement1, both } = Secoundslice.actions

export default Secoundslice.reducer