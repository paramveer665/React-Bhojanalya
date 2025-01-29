import { imgUrl } from "../../constant";

const RestaurantCard = function ({
  name,
  cloudinaryImageId,
  areaName,
  avgRating,
  cusisnes,
}) {
  // console.log(name);
  return (
    <div className="resturant-card">
      <img className="card-img" src={imgUrl + cloudinaryImageId} />
      <div className="card-info">
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <h3>{avgRating} Stars</h3>
        {/* <h3>Cuisines: {cuisines + ", "}</h3> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
