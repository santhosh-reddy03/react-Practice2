// import { createStore } from "redux"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { count: 0, showCount: true };


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        increase: (state, action) => {
            state.count += action.amount;
        },
        toggle: (state) => {
            state.show = !state.show;
        }
    }
})

//combineReducers({reducers: counterSlice.reducer})
const store = configureStore({ counter: counterSlice.reducer });

// const countReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             count: state.count + 1,
//             show: state.show
//         }
//     }

//     if (action.type === 'DECREMENT') {
//         return {
//             count: state.count - 1,
//             show: state.show
//         }   
//     }

//     if (action.type === 'INCREASE') {
//         return {
//             count: state.count + action.amount,
//             show: state.show
//         }
//     }
//     if (action.type === 'TOGGLE') {
//         return {
//             count: state.count,
//             show: !state.show
//         }
//     }
//     return state;
// }


// const store = createStore(countReducer);

export const counterActions = counterSlice.actions;

export default store;
