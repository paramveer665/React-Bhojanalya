import { REST_URL, proxyUrl } from "../constant";
import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    try {
      const data = await fetch(proxyUrl + REST_URL);
      const list = await data.json();
      const restCards = list?.data?.cards || [];

      const capturedRest =
        restCards.find(
          (innerCard) =>
            innerCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

      setRestaurant(capturedRest);
    } catch (error) {
      console.error("Error fetching RestaurantCard:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return { restaurant, isLoading };
};
export default useRestaurants;
