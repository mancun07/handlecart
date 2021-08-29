import {useEffect} from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from 'react-redux'
import {sendPostRequest, sendGetRequest} from './store/cartActions'


function App() {
  
  const dispatch = useDispatch()
  const cartIsShown = useSelector(state => state.ui.cartIsShown)
  const cart = useSelector(state => state.cart)


  useEffect(() => {
    
    dispatch(sendGetRequest())

  }, [dispatch])

  useEffect(() => {


    if (cart.postRequestIsNeeded) {

      dispatch(sendPostRequest(cart))
    }
  }, [cart, dispatch])



  return (
    <Layout>
      {cartIsShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
