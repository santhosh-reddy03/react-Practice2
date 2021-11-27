import React from "react";
import foodImg from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'
const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowcart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImg} alt="the bowl of meals" />
        </div>
    </React.Fragment>
};

export default Header;