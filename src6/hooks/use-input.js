import { useState } from "react";
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const blurHandler = () => {
        setIsTouched(true);
    }

    const resetHandler = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {enteredValue, valueIsValid, hasError, valueChangeHandler, blurHandler, resetHandler};
}

export default useInput;