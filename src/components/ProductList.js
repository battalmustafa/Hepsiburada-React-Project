import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

function ProductList(props) {

  
  return (
    <div className={classes.container}>
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          brand={product.brand}
          color={product.color}
          price={product.price.FirstPrice}
          discountedPrice={product.price.DiscountedPrice}
        />
      ))}
    </ul>
    </div>
  );
}

export default ProductList;