import { createSlice } from "@reduxjs/toolkit";


//second, cretate the slice for each component..
//here this is the slice for counter.
//in a slice we give an object inside createSlice()
//the object consists of
//  1.name              << reducer name
//  2.initialState      <<initial state value
//  3.reducers          <<reducer functions
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByValue: (state,action)=>{
            state.value += action.payload
        },
    }
});
export const {increment, decrement, incrementByValue} =counterSlice.actions;

export default counterSlice.reducer;
