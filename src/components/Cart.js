import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  if (cartItems.length == 0) return <EmptyCart />;

  return (
    <div className="sm:w-full   flex justify-center">
      <div className="   flex flex-col items-center justify-center bg-amber-400 rounded-lg p-2 m-5">
        <button
          className="bg-blue-600 sm:w-48 sm:font-bold sm:text-lg text-white font-semibold rounded-lg  p-2  m-4"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        <div className="p-2 bg-amber-200 rounded-lg">
          {cartItems.map((items) => (
            <CartItem {...items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
