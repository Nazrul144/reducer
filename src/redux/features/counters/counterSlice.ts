import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value +=1;
        },
        decrement: (state) => {
            state.value = state.value -=1;
        }
    }
})

export default counterSlice.reducer;

export const {increment, decrement} = counterSlice.actions;