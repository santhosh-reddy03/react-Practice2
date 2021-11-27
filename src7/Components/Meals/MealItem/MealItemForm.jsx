import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
const MealItemForm = props => {
    const inputRef = useRef();
    const [trueAmount, setTrueAmount] = useState(true);
    const submitHandler = event =>{
        event.preventDefault();
        const AmountEntered = inputRef.current.value;
        const numAmount = +AmountEntered;
        if (numAmount===0 || numAmount<1 || numAmount>5){
            setTrueAmount(false);
            return ;
        }
        props.onAddToCart(numAmount);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={inputRef} label="Amount" input={{
                id:"Amount_"+props.id,
                type: "number",
                min:"1",
                max:"5",
                defaultValue: "1",
            }}/>
            <button>+ Add</button>
            {!trueAmount && <p>Please enter amount between (1,5)</p>}
        </form>
    )
}

export default MealItemForm;