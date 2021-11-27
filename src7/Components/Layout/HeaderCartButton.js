import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store-Context/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = props => {
    const [btnStyle, setbtnStyle] = useState(false);
    const dataContext = useContext(CartContext);
    const {items} = dataContext
    const numberOfCartItems = items.reduce((curnum,item) => {return curnum + item.amount},0);
    const btnCls = `${classes.button} ${btnStyle? classes.bump:''}`
    useEffect(() => {
        if (items.length === 0){
            return ;
        }
        setbtnStyle(true);
        const timer = setTimeout(()=>{setbtnStyle(false)}, 300);
        return () => {clearTimeout(timer)};
    }, [items]);
    return <button className={btnCls} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;