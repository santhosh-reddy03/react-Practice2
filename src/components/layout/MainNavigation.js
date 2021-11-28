import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' activeClassName={classes.active}>
                            AllQuotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/newquotes' activeClassName={classes.active}>
                            NewQuote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
}

export default MainNavigation;