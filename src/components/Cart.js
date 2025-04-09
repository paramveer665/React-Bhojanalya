import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  if (cartItems.length == 0)
    return (
      <div className=" h-20  bg-amber-200 text-amber-700 font-black flex flex-col items-center justify-center">
        Cart is empty, add
      </div>
    );

  return (
    <div>
      <div className="  text-black flex flex-col items-center justify-center m-5">
        <button
          className="bg-blue-600 rounded-xl  p-2  m-4"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItems.map((items) => (
          <CartItem {...items} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
