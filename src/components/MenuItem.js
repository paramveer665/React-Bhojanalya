import { MENU_ITEM_IMAGE } from "../../constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const MenuItem = ({ card }) => {
  // console.log(card);
  const dispatch = useDispatch();
  const { name, category, description, price, defaultPrice, imageId } =
    card.info;

  const handleAddItem = () => {
    dispatch(addItem(card.info));
  };

  return (
    <div className=" sm:w-[500px] sm:gap-[215px] rounded-lg   md:w-[650px] lg:w-[800px] h-56 bg-amber-300  sm:rounded-b-lg sm:rounded-none  flex justify-between p-3  border-t-2">
      <div className="items-center">
        <div className=" overflow-hidden text-ellipsis whitespace-break-spaces">
          {name}
        </div>
        <div>{category}</div>
        {/* <div>{description}</div> */}
        {price ? (
          <div> ₹ {price / 100} </div>
        ) : (
          <div> ₹ {defaultPrice / 100} </div>
        )}
      </div>
      <div className="flex  flex-col ">
        <img
          alt={name}
          className="sm:h-32 sm:w-full h-36   w-full  rounded-lg inset-0 object-cover overflow-hidden"
          src={MENU_ITEM_IMAGE + imageId}
        ></img>
        <button
          className="bg-blue-600 mt-10    p-2 cursor-pointer rounded-lg hover:bg-blue-800"
          onClick={() => handleAddItem(card.info)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default MenuItem;
