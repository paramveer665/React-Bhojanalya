import { REST_URL } from "../constant";
import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMenu();
  }, []);

  function fetchApi() {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.90950894716071&lng=77.60464466585898&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((list) => {
        setRestaurant(
          list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  async function getMenu() {
    try {
      const data = await fetch(REST_URL);

      const list = await data.json();
      // console.log("konse wala", list);
      const restCards = list?.data?.cards || [];
      // console.log("kaam", restCards);
      // const rests =
      //   restCards?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const capturedRest =
        restCards.find(
          (innerCard) =>
            innerCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
      // console.log("mila", capturedRest);

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
