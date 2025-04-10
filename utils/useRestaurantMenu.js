import { useEffect, useState } from "react";
import { FETCH_MENU_URL, proxyUrl } from "../constant";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(proxyUrl + FETCH_MENU_URL + resId);
    const list = await data.json();

    setRestaurant(list?.data?.cards[2]?.card?.card?.info);
  }

  return restaurant;
};
export default useRestaurantMenu;
