import { imgUrl } from "../../constant";

const RestaurantCard = function ({
  name,
  cloudinaryImageId,
  areaName,
  avgRating,
  cusisnes,
  costForTwo,
}) {
  // console.log(name);
  return (
    <div
      className="m-4 bg-amber-300  shadow-amber-50 drop-shadow-2xl overflow-hidden  hover:bg-amber-200 w-72 h-90 rounded-xl hover:scale-105 transition duration-300"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className=" ">
        <img
          className=" inset-0 w-full h-56 object-cover"
          src={imgUrl + cloudinaryImageId}
        />
      </div>

      <div className="w-56 p-4  ">
        <div className="font-semibold text-lg overflow-hidden text-ellipsis whitespace-nowrap  w-52 ">
          {name}
        </div>
        <div className="font-normal">{areaName}</div>
        <div className="font-normal text-slate-700">{avgRating} Stars</div>
        <div className="font-normal text-slate-700">{(" ", costForTwo)} </div>
        {/* <h3>Cuisines: {cuisines + ", "}</h3> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
