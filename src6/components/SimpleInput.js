// import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: nameInputValue, 
    valueIsValid: nameIsValid, 
    hasError: nameInputisnotValid, 
    valueChangeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,  
    resetHandler: nameResetHandler
  } = useInput((value) => { return value.trim() !== ''})

  const {
    enteredValue: emailInputValue, 
    valueIsValid: emailIsValid, 
    hasError: emailInputisnotValid, 
    valueChangeHandler: emailInputChangeHandler,
    blurHandler: emailInputBlurHandler,  
    resetHandler: emailResetHandler
  } = useInput((value) => {return value.includes('@') && value.includes('.com')})
  // const [enteredEmail, setEnteredEmail] = useState('');
  
  // const [inputisValid, setInputisValid] = useState(false);
  // const [inputisTouched, setInputisTouched] = useState(false);
  // const [EmailisTouched, setEmailisTouched] = useState(false);
  // const emailisvalid = enteredEmail.includes('@') && enteredEmail.includes('.com')
  // const inputisValid = enteredValue.trim() !== '';
  // const nameInputisnotValid = !inputisValid && inputisTouched;
  // const emailinputisnotvalid = !emailisvalid && EmailisTouched;
  // const emailblurHandler = (event) =>{
    // setEmailisTouched(true);
  // }
  // const inputEmailHandler = (event) =>{
    // setEnteredEmail(event.target.value);
  // }
  // const nameInputref = useRef();
  // const inputChangeHandler = (event) => {
    // setEnteredValue(event.target.value);
    // if (event.target.value.trim() !== ''){
    //   setInputisValid(true);
    // }
  // }

  // const blurHandler = (event) => {
    // setInputisTouched(true);
    // if (enteredValue.trim() === ''){
    //   setInputisValid(false);
    // }
  // }
  const submitHandler = (event) => {
    event.preventDefault();
    // setInputisTouched(true);
    if (nameInputValue.trim() === '') {
      // setInputisValid(false);
      return;
    }
    console.log(emailInputValue);
    console.log(nameInputValue);
    // console.log(nameInputref.current.value);
    // setInputisValid(true);
    // setEnteredEmail('');
    // setEmailisTouched(false);
    nameResetHandler();
    emailResetHandler();
    // setEnteredValue('');
    // setInputisTouched(false);
  }
  const formvalid = emailIsValid && nameIsValid;
  const nameClass = nameInputisnotValid ? 'form-control invalid' : 'form-control'
  const emailClass = emailInputisnotValid ? 'form-control invalid': 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameInputBlurHandler} type='text' id='name' value={nameInputValue} onChange={nameInputChangeHandler} />
        {nameInputisnotValid && <p className='error-text'>Enter valid input</p>}
      </div>
      <div className={emailClass}>
        <label htmlFor='email'>Your Email</label>
        <input onBlur={emailInputBlurHandler} type='email' id='email' value={emailInputValue} onChange={emailInputChangeHandler} />
        {emailInputisnotValid && <p className='error-text'>Enter valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
