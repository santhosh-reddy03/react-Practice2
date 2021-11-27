import useInput from '../hooks/use-input'
const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName, 
    valueIsValid : FirstNameisValid,
    hasError: FirstNameisnotValid,
    valueChangeHandler: FirstNameChangeHandler,
    blurHandler: FirstNameBlurHandler,
    resetHandler: FirstNameResetHandler,
  } = useInput((value)=> {return value.trim() !== ''})
  const {
    enteredValue: enteredLastName, 
    valueIsValid : LastNameisValid,
    hasError: LastNameisnotValid,
    valueChangeHandler: LastNameChangeHandler,
    blurHandler: LastNameBlurHandler,
    resetHandler: LastNameResetHandler,
  } = useInput((value)=> {return value.trim() !== ''})
  const {
    enteredValue: enteredEmail, 
    valueIsValid : EmailisValid,
    hasError: EmailisnotValid,
    valueChangeHandler: EmailChangeHandler,
    blurHandler: EmailBlurHandler,
    resetHandler: EmailResetHandler,
  } = useInput((value)=> {return value.includes('@') && value.includes('.com')})
  const formisValid = FirstNameisValid && LastNameisValid && EmailisValid;
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    FirstNameResetHandler();
    LastNameResetHandler();
    EmailResetHandler();
  }
  const firstNameClass = !FirstNameisnotValid ? 'form-control': 'form-control invalid';
  const LastNameClass = !LastNameisnotValid ? 'form-control': 'form-control invalid';
  const emailClass = !EmailisnotValid ? 'form-control': 'form-control invalid';
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' onBlur={FirstNameBlurHandler} onChange={FirstNameChangeHandler} value={enteredFirstName} id='name' />
          {FirstNameisnotValid && <p className='error-text'>first name is not valid</p>}
        </div>
        <div className={LastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' onBlur={LastNameBlurHandler} onChange={LastNameChangeHandler} value={enteredLastName} id='name' />
          {LastNameisnotValid && <p className='error-text'>first name is not valid</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onBlur={EmailBlurHandler} onChange={EmailChangeHandler} value={enteredEmail}/>
        {EmailisnotValid && <p className='error-text'>first name is not valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
