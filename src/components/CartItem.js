import { MENU_ITEM_IMAGE } from "../../constant";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, changeBy } from "../../utils/cartSlice";
const CartItem = ({ name, imageId, price, defaultPrice, quantity, id }) => {
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(increaseItem(id));
  };
  const decreaseQuantity = () => dispatch(decreaseItem(id));
  console.log("ye kiska naam hai", name);
  const changeQuantity = (id, amount) => {
    dispatch(changeBy(id, amount));
  };
  return (
    <div className="sm:w-[500px]   md:w-[650px] lg:w-[800px]  shadow-2xl mb-2 rounded-b-lg  sm:rounded-b-lg sm:rounded-none  flex justify-between p-4  ">
      <div className="items-center p-2 m-4 ">
        <div>{name}</div>
        {price ? (
          <div> Price: ₹ {price / 100} </div>
        ) : (
          <div> PRice: ₹ {defaultPrice / 100} </div>
        )}
      </div>
      <div className="flex flex-col items-end">
        <img
          className="h-32 rounded-lg overflow-hidden shadow-2xl "
          src={MENU_ITEM_IMAGE + imageId}
        ></img>
        <div className="text-sm sm:text-lg">
          <button
            className="bg-blue-600 text-amber-50 shadow-amber-950 shadow-2xl sm:w-7 w-6  sm:h-8 h-7 my-4 h cursor-pointer rounded-l-lg hover:bg-blue-800"
            onClick={() => decreaseQuantity(id)}
          >
            -
          </button>
          <input
            className="bg-amber-50 sm:h-8 h-7 w-6 sm:w-10 pl-2"
            value={quantity}
            onChange={(e) => changeQuantity(id, e.target.value)}
          ></input>
          <button
            className="bg-blue-600 text-amber-50 shadow-amber-950 shadow-2xl sm:w-7 w-6  sm:h-8 h-7 my-4  cursor-pointer rounded-r-lg hover:bg-blue-800"
            onClick={() => increaseQuantity(id)}
          >
            +
          </button>
        </div>
        <div>
          {!price ? (defaultPrice / 100) * quantity : (price / 100) * quantity}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
