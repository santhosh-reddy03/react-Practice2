import React, { useContext, useState } from 'react';
import CartContext from '../../Store-Context/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem.js';
import Checkout from './Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [submittingData, setSubmittingData] = useState(false);
    const [dataSent, setDatasent] = useState(false);
    const dataContext = useContext(CartContext)

    const orderHandler = () => {
        setIsCheckout(true);
    }
    const removeHandler = id => {
        dataContext.removeItem(id);
    }
    const addHandler = item => {
        dataContext.addItem({ ...item, amount: 1 })
    }
    const hasItems = dataContext.items.length > 0;
    const cartItems = <ul className={classes['cart-items']}>{dataContext.items.map(item => {
        return <CartItem name={item.name}
            price={+item.price}
            amount={item.amount}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)} />;
    })}</ul>

    const submitHandler = async (userData) => {
        setSubmittingData(true);
        await fetch('https://dummy-api-f4510-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                items: dataContext.items
            })
        })
        setSubmittingData(false);
        setDatasent(true);
        dataContext.clearCart();
    }
    const modalOut = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>;

    const modalFullout = <React.Fragment>
        {cartItems}
            <div className={classes.total}>
                <span>Total</span>
                <span>{`$${dataContext.totalAmount}`}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitHandler} onCancel={props.onClose} />}
            {!isCheckout && modalOut}
    </React.Fragment>

    const foodorder = <React.Fragment><p>Food is being prepared now</p> <button className={classes.button} onClick={props.onClose}>Close</button></React.Fragment>
    return (
        <Modal onClose={props.onClose}>
            {!submittingData && !dataSent && modalFullout}
            {submittingData && <p>Food is being taken as note</p>}
            {dataSent && foodorder}
        </Modal>
    )
}

export default Cart;
