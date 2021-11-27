import { Link, NavLink } from "react-router-dom"
import classes from "./mainheader.module.css"
const MainHeader = () => {
    return <div className={classes.header}>
        <nav>
        <ul>
            <li>
                <NavLink activeClassName={classes.active} to="/welcome">welcome</NavLink>
            </li>
            <li>
                <NavLink activeClassName={classes.active} to="/products">products</NavLink>
            </li>
        </ul>
        </nav>
    </div>
}

export default MainHeader;