import { useEffect, useState } from "react";
import { MENU_ITEM_URL, menuItemPUrl } from "../constant";

const useMenuItem = (resId) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const data = await fetch(menuItemPUrl + resId);
      const list = await data.json();
      const menuCards = list?.data?.cards || [];

      const menuCard = menuCards.find((card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards.some(
          (innerCard) => innerCard?.card?.card?.itemCards
        )
      );

      //   setItems(
      //     list?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      //       ?.card
      //   );
      // }
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
