import { MENU_ITEM_IMAGE } from "../../constant";
const CartItem = ({
  name,
  imageId,
  areaName,
  avgRating,
  cusisnes,
  price,
  defaultPrice,
}) => {
  console.log("ye kiska naam hai", name);
  return (
    <div className="sm:w-[500px] sm:gap-[215px]  md:w-[650px] lg:w-[800px]  shadow-2xl mb-2 rounded-b-lg  sm:rounded-b-lg sm:rounded-none  flex justify-between p-4  ">
      <div className="items-center p-2 m-4 ">
        <div>{name}</div>

        {/* <div>{description}</div> */}
        {price ? (
          <div> ₹ {price / 100} </div>
        ) : (
          <div> ₹ {defaultPrice / 100} </div>
        )}
      </div>
      <div className="flex flex-col items-end">
        <img
          className="h-32 rounded-lg overflow-hidden shadow-2xl "
          src={MENU_ITEM_IMAGE + imageId}
        ></img>
        <button
          className="bg-blue-600 text-amber-50 shadow-amber-950 shadow-2xl w-25  my-4 p-2 cursor-pointer rounded-lg hover:bg-blue-800"
          onClick={() => handleAddItem(card.info)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
