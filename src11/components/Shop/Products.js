import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{id: 1, title: 'Test1', price: 6, description: 'This is a first product - amazing!'},
  {id: 2, title: 'Test2', price: 5, description: 'This is a second product - amazing!'},
  {id: 3, title: 'Test3', price: 4, description: 'This is a third product - amazing!'}];

const Products = () => {
  const products = DUMMY_PRODUCTS.map(product =>
    <ProductItem
    key={`pkey_${product.id}`}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products}
      </ul>
    </section>
  );
};

export default Products;
