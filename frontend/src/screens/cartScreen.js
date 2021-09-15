import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import CartItem from '../components/cartItem';
// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

function CartScreen() {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => { }, []);
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
 const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  return (
    <>
      <div className="md:flex justify-center mx-auto w-full ">
        <div className="sm:m-8  ">
          <h2 className="text-3xl mb-8 font-bold italic">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div className="mt-10 mb-10">
              Your Cart Is Empty <Link to="/Shop" className="text-blue-800 hover:text-blue-500 ">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className=" m-8  text-center mb-64">
          <div className="border-4  px-20">
            <p className="p-4">Subtotal ({getCartCount()}) items:</p>
            <p className="font-bold mb-4 ">${getCartSubTotal()}</p>
          </div>
          <div className="border-4 border-t-0">
            <button className="bg-gray-600 p-2 m-8 rounded text-white hover:bg-gray-800">
              <Link to="/Checkout">
                Proceed to Checkout
              </Link>
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default CartScreen;
