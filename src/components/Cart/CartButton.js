import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {uiActions} from '../../store/uiSlice'

const CartButton = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const onCartHandler = () => {
      dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={onCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
