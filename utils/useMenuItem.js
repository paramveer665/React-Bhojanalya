import { useEffect, useState } from "react";
import { MENU_ITEM } from "../constant";

const useMenuItem = (resId) => {
  // console.log("mila", resId);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const data = await fetch(MENU_ITEM + resId);
      const list = await data.json();
      const menuCards = list?.data?.cards || [];

      const menuCard = menuCards.find((card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards.some(
          (innerCard) => innerCard?.card?.card?.itemCards
        )
      );
      const extractedMenu =
        menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
          (innerCard) => innerCard?.card?.card?.itemCards
        )?.card?.card?.itemCards || [];
      setItems(extractedMenu);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false);
    }
  }

  return { items, loading };
};
export default useMenuItem;
