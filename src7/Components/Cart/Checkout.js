import { useRef, useState } from 'react';
import classes from './Checkout.module.css';
const Checkout = (props) => {
    const [formInputIsvalid, setFormInputIsValid] = useState({name:true, street:true, postalCode:true,city:true})
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalRef.current.value;
        const enteredCity = cityRef.current.value;

        setFormInputIsValid({
            name: enteredName.trim() !== '',
            street : enteredStreet.trim() !== '',
            postalCode: enteredPostal.trim().length === 5,
            city: enteredCity.trim() !== ''
        })
        const formIsvalid = formInputIsvalid.name && formInputIsvalid.street && formInputIsvalid.postalCode && formInputIsvalid.city
        if (!formIsvalid){
          console.log("form is invalid");
          return;
        }
        props.onConfirm({
          name: enteredName,
          street: enteredStreet,
          postal: enteredPostal,
          city: enteredCity
        });
    }

    const nameClass = `${classes.control} ${!formInputIsvalid.name && classes.invalid}`
    const streetClass = `${classes.control} ${!formInputIsvalid.street && classes.invalid}`
    const postalClass = `${classes.control} ${!formInputIsvalid.postalCode && classes.invalid}`
    const cityClass = `${classes.control} ${!formInputIsvalid.city && classes.invalid}`

    return  <form className={classes.form} onSubmit={submitHandler}>
    <div className={nameClass}>
      <label htmlFor='name'>Your Name</label>
      <input type='text' id='name' ref={nameRef}/>
    </div>
    <div className={streetClass}>
      <label htmlFor='street'>Street</label>
      <input type='text' id='street' ref={streetRef}/>
    </div>
    <div className={postalClass}>
      <label htmlFor='postal'>Postal Code</label>
      <input type='text' id='postal' ref={postalRef}/>
    </div>
    <div className={cityClass}>
      <label htmlFor='city'>City</label>
      <input type='text' id='city' ref={cityRef}/>
    </div>
    <div className={classes.actions}>
      <button type='button' onClick={props.onCancel}>
        Cancel
      </button>
      <button className={classes.submit}>Confirm</button>
    </div>
  </form>
}

export default Checkout;