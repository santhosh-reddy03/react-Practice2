import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cart.total);
  const dispatch = useDispatch();
  const toggleCart = () => {dispatch(uiActions.toggleCart())};
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{ totalQuantity } </span>
    </button>
  );
};

export default CartButton;
