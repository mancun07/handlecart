import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';

const Cart = () => {

  const items = useSelector(state => state.cart.items)

  return (
    <motion.div initial={{y: '-100vh'}} animate={{y:0}}>
    <Card className={classes.cart}>
      <h2>Ваши покупки</h2>
      <ul>  
        {items.map(el => {
          return <CartItem
          key={el.id}
          item={{id: el.id, title: el.title, quantity: el.quantity, totalPrice: el.totalPrice, price: el.price }}
        />
        })}
      </ul>
    </Card>
    </motion.div>
  );
};

export default Cart;
