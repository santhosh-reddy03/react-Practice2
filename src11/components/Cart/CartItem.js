import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id, description} = props.item;

  const dispatch = useDispatch()

  const addHandler = () => {dispatch(cartActions.addItem({id:id, price:price, name:title}))};
  const removeHandler = () => {dispatch(cartActions.removeItem({id:id}))};

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
