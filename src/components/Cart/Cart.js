import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import {motion} from 'framer-motion';
import {uiActions} from '../../store/uiSlice'

const Cart = () => {

  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const closeHandler = () => {
      dispatch(uiActions.toggleCart())
  }

  return (
    <motion.div initial={{y: '-100vh'}} animate={{y:0}}>
    <Card className={classes.cart}>
      <h2>ВАШИ ПОКУПКИ</h2>
      <ul>  
        {items.map(el => {
          return <CartItem
          key={el.id}
          item={{id: el.id, title: el.title, quantity: el.quantity, totalPrice: el.totalPrice, price: el.price }}
        />
        })}
      </ul>
      <span className={classes.close} onClick={closeHandler}>X</span>
    </Card>
    </motion.div>
  );
};

export default Cart;
