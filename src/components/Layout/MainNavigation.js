import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const isLoggedin = useSelector((state) => state.isLoggedin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch({ type: "logout" });
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>{!isLoggedin && <Link to="/auth">Login</Link>}</li>
          <li>{isLoggedin && <Link to="/profile">Profile</Link>}</li>
          <li>
            {isLoggedin && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
