import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0, showCount: true };


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState ,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        increase: (state, action) => {
            // every thing comes as payload instead of custom action
            state.count += action.payload;
        },
        toggle: (state) => {
            state.show = !state.show;
        }
    }
})


export const counterActions = counterSlice.actions;

export default counterSlice.reducer;