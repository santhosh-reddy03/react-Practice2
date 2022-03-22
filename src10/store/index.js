// import { createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//combineReducers({reducers: counterSlice.reducer})
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

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

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
