import { useEffect, useState } from "react";
import { FETCH_MENU_URL, menuPUrl } from "../constant";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(menuPUrl + resId);
    const list = await data.json();

    setRestaurant(list?.data?.cards[2]?.card?.card?.info);
  }

  return restaurant;
};
export default useRestaurantMenu;
