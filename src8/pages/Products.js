import { NavLink } from "react-router-dom";

const Products = () => {
    return <div>
        <h1>"this is a Prodcuts page"</h1>
        <li>
            <NavLink to="/products/1">Product 1</NavLink>
        </li>
        <li>
            <NavLink to="/products/2">Product 2</NavLink>
        </li>
        <li>
            <NavLink to="/products/3">Product 3</NavLink>
        </li>
    </div>
}

export default Products;