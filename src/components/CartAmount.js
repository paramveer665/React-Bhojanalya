import { useSelector } from "react-redux";

const CartAmount = () => {
  const cartItems = useSelector((Store) => Store.cart.items);
  console.log(cartItems);
  return (
    <div className="mt-3 shadow-2xl bg-amber-200 rounded-lg p-2">
      {" "}
      <div className="flex justify-between p-2 px-3 sm:text md text-sm ">
        <div className="w-52">Item</div>
        {/* <div>Quantity</div> */}
        <div>Price</div>
        <div>Amount</div>
      </div>
      {cartItems.map(({ name, price, defaultPrice }) => (
        <div className="m-2  flex justify-between text-sm sm:text-md">
          <div className="w-48 whitespace-nowrap text-ellipsis overflow-hidden">
            {name}
          </div>
          {/* <div></div> */}
          <div>{!price ? defaultPrice / 100 : price / 100}</div>
          <div>{!price ? defaultPrice / 100 : price / 100}</div>
        </div>
      ))}
    </div>
  );
};

export default CartAmount;
