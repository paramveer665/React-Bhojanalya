import { imgUrl } from "../../constant";
import { CiStar } from "react-icons/ci";

const MenuResDesc = ({
  name,
  cloudinaryImageId,
  city,
  areaName,
  avgRating,
  costForTwoMessage,
  totalRatings,
}) => {
  return (
    <div className="my-4 sm:mb-0 mx-3 sm:w-[500px] md:w-[650px] lg:w-[800px] bg-amber-300 rounded-lg  sm:rounded-b-none flex sm:flex-col ">
      <img
        className="h-56 sm:h-64  sm:rounded-l-lg sm:rounded-bl-none sm:rounded-t-lg rounded-l-lg  object-cover overflow-hidden"
        src={imgUrl + cloudinaryImageId}
      ></img>
      <div className="pr-4 pt-2 pl-4 w-48">
        <div className="md:flex lg:flex sm:flex justify-between items-center">
          <div className="font-medium text-lg  overflow-hidden text-ellipsis whitespace-break-spaces">
            {name}
          </div>
          <div className="flex items-center ">
            <CiStar className="size-6 items-center" />({avgRating})
            <div className="underline">{totalRatings}</div>
          </div>
        </div>
        <div className="capitalize font-normal">
          {areaName}, {city}
        </div>
        <div className="font-light">{costForTwoMessage}</div>
      </div>
    </div>
  );
};
export default MenuResDesc;
