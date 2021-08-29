import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ProductItem = (props) => {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
     dispatch(cartActions.addItemToCart({
       id, title, price
     }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Добавить в корзину</button>
        </div>
      </Card>
    </li>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default ProductItem;
