import { configureStore } from "@reduxjs/toolkit";

import reduceCounter from '../redux/features/counters/counterSlice'

const store = configureStore({
    reducer: {
        counter: reduceCounter
    }
})

export default store;