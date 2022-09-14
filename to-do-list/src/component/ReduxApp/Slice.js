import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state)=>{
            state.value +=1 ;
        },
        decrement: (state)=>{
            state.value -= 1;
        }
    }
})

export default CounterSlice.reducer; //exporting reducers
export const {increment, decrement} = CounterSlice.actions; //exporting actions