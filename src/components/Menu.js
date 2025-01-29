import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { imgUrl } from "../../constant";

const Menu = () => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getMenu();
    console.log("kya scene");
  }, []);

  async function getMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.90950894716071&lng=77.60464466585898&restaurantId=" +
        params.resId
    );
    const list = await data.json();
    setRestaurant(list.data.cards[2].card.card.info);
    console.log(restaurant, "hai");
  }
  const params = useParams();
  console.log(params);
  return (
    <>
      <div key={restaurant.id}>
        <h1>Retaurant id:{params.resId}</h1>
        <h2>Restaurant Name: {restaurant.name}</h2>
        <img className="card-img" src={imgUrl + restaurant.cloudinaryImageId} />
      </div>
    </>
  );
};

export default Menu;
