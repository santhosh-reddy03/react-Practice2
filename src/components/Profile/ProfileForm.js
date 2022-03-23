import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const token = useSelector((state) => state.isToken);
  const dispatch = useDispatch();
  const passwordInputRef = useRef();
  const passwordChangeHandler = (event) => {
    event.preventDefault();
    const password = passwordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAZJnwZeD8fDQjVrd5WbWSoeztw3BWAyhk",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: password,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(() => {
            let error = "password change failed";
            throw new Error(error);
          });
        }
      })
      .then((data) => {
        dispatch({ type: "login", token: data.idToken });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
