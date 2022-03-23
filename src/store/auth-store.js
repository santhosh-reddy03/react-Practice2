import { createStore } from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLoggedin: localStorage.getItem("token") ? true : false,
//     token: localStorage.getItem("token") || null,
//   },
//   reducers: {
//     login: (action) => {
//       state.isLoggedin = true;
//       state.token = action.payload.token;
//       localStorage.setItem("token", action.payload.token);
//     },
//     logout: () => {
//       state.isLoggedin = false;
//       state.token = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem('expirationtime')
//     },
//   },
// });

const authStateReduce = (
  state = { isLoggedin: false, isToken: null },
  action
) => {
  if (action.type === "login") {
    return { isLoggedin: !state.isLoggedin, isToken: action.token };
  }
  if (action.type === "logout") {
    return { isLoggedin: !state.isLoggedin, isToken: null };
  }
  return state;
};

const store = createStore(authStateReduce);

export default store;
