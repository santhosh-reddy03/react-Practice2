import { useReducer } from "react";
import CartContext from "./cart-context"

const defaultItemAmount = {
    items: [],
    totalAmount: 0
}

const addItemReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;
        let updatedItems;
        const existingItemindex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemindex];
        if (existingItem){
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount,};
            updatedItems = [...state.items];
            updatedItems[existingItemindex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        // updatedItems = state.items.concat(action.item);
        return {items: updatedItems, totalAmount: updatedtotalAmount};
    }
    else if (action.type === 'REMOVE'){
        const existingItemindex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existingItemindex];
        let updatedItems;
        const updatedtotalAmount = state.totalAmount - existingItem.price
        if (existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !==action.id);
        }else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemindex] = updatedItem;
        }
        return {items: updatedItems, totalAmount: updatedtotalAmount};
    }
    else if (action.type === 'CLEAR'){
        return defaultItemAmount
    }
    return defaultItemAmount
}
const CartProvider = props => {
    const [itemState, dispatchItemState] = useReducer(addItemReducer, defaultItemAmount);
    const addItemHandler = (item) => {
        dispatchItemState({type: "ADD", item: item});
    };
    const removeItemHandler = (id) => {
        dispatchItemState({type: 'REMOVE', id:id});
    };
    const clearcartHandler = () => {
        dispatchItemState({type: 'CLEAR'});
    }
    const cartContext = {
        items : itemState.items,
        totalAmount: itemState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearCart: clearcartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;



// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === 'ADD') {
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;

//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const existingCartItem = state.items[existingCartItemIndex];
//     let updatedItems;

//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + action.item.amount,
//       };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       updatedItems = state.items.concat(action.item);
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   if (action.type === 'REMOVE') {
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingItem = state.items[existingCartItemIndex];
//     const updatedTotalAmount = state.totalAmount - existingItem.price;
//     let updatedItems;
//     if (existingItem.amount === 1) {
//       updatedItems = state.items.filter(item => item.id !== action.id);
//     } else {
//       const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
//       updatedItems = [...state.items];
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }

//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount
//     };
//   }

//   return defaultCartState;
// };

// const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );

//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({ type: 'ADD', item: item });
//   };

//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({ type: 'REMOVE', id: id });
//   };

//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };

//   return (
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
