import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

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

  useEffect(() => {
    console.log("hello namaste");
    fetchApi();

    console.log("hello");
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

  if (!restaurant.length) return <Shimmer />;

  return (
    <>
      {console.log("hi this is inside")}
      <div className="body">
        <input
          className="restaurant-search"
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

        {/* <button
          className="search"
          onClick={function () {
            const filterList = filterData(restaurant, searchvalue);
            setFilteredRestaurant(filterList);
          }}
        >
          Search
        </button> */}
        <button
          className="search"
          onClick={function () {
            fetchApi();
            setSearchValue("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="body-cards">
        {filteredRestaurant.map((e) => (
          <Link to={"/restaurant/" + e.info.id}>
            <RestaurantCard key={e.info.id} {...e.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
