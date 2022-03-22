import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.total = action.payload.total;
      state.items = action.payload.items;
    },
    addItem: (state, action) => {
      const { id, name, price, description } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        item.totalprice += price;
      } else {
        state.items.push({
          id: id,
          name: name,
          price: price,
          quantity: 1,
          totalprice: price,
          description: description,
        });
      }
      state.total += 1;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        item.quantity -= 1;
        item.totalprice -= item.price;
      }
      state.total -= 1;
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending data to backend",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://dummy-api-f4510-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            total: cart.total,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent data Successfully!",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed!",
          message: "sending data Failed!",
        })
      );
    }
  };
};

export const getData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "loading",
        message: "loading data from backend",
      })
    );
    const getData = async () => {
      const response = await fetch(
        "https://dummy-api-f4510-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("retrieving data failed");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await getData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          total: data.total,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Data Received",
          message: "fetched data from backend",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed",
          message: "failed loading data from backend",
        })
      );
    }
  };
};
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
