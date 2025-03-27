import { MENU_ITEM_IMAGE } from "../../constant";
const MenuItem = ({ card }) => {
  //   console.log(card);
  const { name, category, description, defaultPrice, imageId } = card.info;
  return (
    <div className=" sm:w-[500px] sm:gap-[215px] gap-[232px] md:w-[650px] lg:w-[800px] bg-amber-300  sm:rounded-b-lg sm:rounded-none  flex justify-between p-4  border-t-2">
      <div className="items-center">
        <div>{name}</div>
        <div>{category}</div>
        {/* <div>{description}</div> */}
        <div>₹ {defaultPrice / 100} </div>
      </div>
      <div>
        {/* <div className="m-2">Image</div> */}
        <img className="h-32 rounded-lg" src={MENU_ITEM_IMAGE + imageId}></img>
        <button className="bg-blue-600 p-2  rounded-lg hover:bg-blue-800">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default MenuItem;
