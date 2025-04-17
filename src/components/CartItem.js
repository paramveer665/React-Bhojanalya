import { MENU_ITEM_IMAGE } from "../../constant";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem } from "../../utils/cartSlice";
const CartItem = ({
  name,
  imageId,
  areaName,
  avgRating,
  cusisnes,
  price,
  defaultPrice,
  quantity,
  id,
}) => {
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(increaseItem(id));
  };
  const decreaseQuantity = () => dispatch(decreaseItem(id));
  console.log("ye kiska naam hai", name);
  return (
    <div className="sm:w-[500px] sm:gap-[215px]  md:w-[650px] lg:w-[800px]  shadow-2xl mb-2 rounded-b-lg  sm:rounded-b-lg sm:rounded-none  flex justify-between p-4  ">
      <div className="items-center p-2 m-4 ">
        <div>{name}</div>

        {/* <div>{description}</div> */}
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
        <div>
          <button
            className="bg-blue-600 text-amber-50 shadow-amber-950 shadow-2xl w-7  h-8 my-4 h cursor-pointer rounded-l-lg hover:bg-blue-800"
            onClick={() => decreaseQuantity(id)}
          >
            -
          </button>
          <input className="bg-amber-50 w-10 h-8 pl-3" value={quantity}></input>
          <button
            className="bg-blue-600 text-amber-50 shadow-amber-950 shadow-2xl w-7  h-8 my-4 h cursor-pointer rounded-r-lg hover:bg-blue-800"
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
