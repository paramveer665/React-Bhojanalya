import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnline from "../../utils/useOnline";

function filterData(restaur, searchv) {
  // console.log(searchv);
  // console.log("aya", restaur);
  let flist = restaur.filter((r) =>
    r.info.name.toLowerCase().includes(searchv.toLowerCase())
  );

  return flist;
}

const Body = function () {
  let [restaurant, setRestaurant] = useState([]);
  let [searchvalue, setSearchValue] = useState("");
  const [visibleCards, setVisibleCards] = useState(5);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const isOnline = useOnline();

  useEffect(() => {
    fetchApi();
  }, []);

  function fetchApi() {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.90950894716071&lng=77.60464466585898&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurant(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        // console.log(filteredRestaurant, "ye filtered hai");
      });
  }

  // async function fetchApi() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.90950894716071&lng=77.60464466585898&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   setRestaurant(
  //     json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  //   );
  //   console.log(restaurant);
  //   // restaurant.map((e) => console.log(e.info));
  // }

  if (!isOnline) {
    return <h1>Not Online, check your internet connection!</h1>;
  }
  if (!restaurant.length)
    return (
      <>
        <div className="flex justify-center pt-3 items-center ">
          <input
            className="m-2 placeholder-grey-50  border  focus:outline-green-600 h-8 w-80 rounded-md outline-0 bg-amber-50  outline-blue-400 "
            placeholder="Search"
            value={searchvalue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              if (e.target.value == "") {
                setFilteredRestaurant(restaurant);
              }
              const filterList = filterData(restaurant, e.target.value);
              setFilteredRestaurant(filterList);
              // console.log("not uef");
            }}
          />

          <button
            className="bg-blue-500 rounded-md text-white hover:bg-blue-700 cursor-pointer w-18 h-8"
            onClick={function () {
              fetchApi();
              setSearchValue("");
            }}
          >
            Reset
          </button>
        </div>
        <Shimmer />
      </>
    );

  return (
    <div className="bg-gray-800">
      {console.log("hi this is inside")}
      <div className="flex justify-center pt-3 items-center ">
        <input
          className="m-2 placeholder-grey-50  border  focus:outline-green-600 h-8 w-80 rounded-md outline-0 bg-amber-50  outline-blue-400 "
          placeholder="Search"
          value={searchvalue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (e.target.value == "") {
              setFilteredRestaurant(restaurant);
            }
            const filterList = filterData(restaurant, e.target.value);
            setFilteredRestaurant(filterList);
            // console.log("not uef");
          }}
        />

        <button
          className="bg-blue-500 rounded-md text-white hover:bg-blue-700 cursor-pointer w-18 h-8"
          onClick={function () {
            fetchApi();
            setSearchValue("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((e) => (
          <Link to={"/restaurant/" + e.info.id}>
            <RestaurantCard key={e.info.id} {...e.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
