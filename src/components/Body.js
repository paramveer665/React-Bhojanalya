import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurants from "../../utils/useRestaurants";

function filterData(restaur, searchv) {
  let flist = restaur.filter((r) =>
    r.info.name.toLowerCase().includes(searchv.toLowerCase())
  );

  return flist;
}

const Body = function () {
  let [searchvalue, setSearchValue] = useState("");
  const { restaurant, isLoading } = useRestaurants();
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    if (!searchvalue) {
      setFilteredRestaurant(restaurant);
    } else {
      const filtered = filterData(restaurant, searchvalue);
      setFilteredRestaurant(filtered);
    }
  }, [restaurant, searchvalue]);

  if (isLoading) return <Shimmer key={0} />;

  return (
    <div className="bg-gray-800">
      <div className="flex justify-center pt-3 items-center ">
        <input
          className="sm:m-2 my-2 ml-2 placeholder-grey-50    focus:outline-green-600 sm:h-12 sm:w-80  sm:rounded-md  rounded-l-lg w-52 h-12  outline-0 bg-amber-50  outline-blue-400 "
          placeholder="Search Restaurant "
          value={searchvalue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />

        <button
          className="bg-blue-500 sm:rounded-md rounded-r-lg text-white hover:bg-blue-700 cursor-pointer w-18 h-12 "
          onClick={() => {
            setSearchValue("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((e) => (
          <Link key={e.info.id} to={"/restaurant/" + e.info.id}>
            <RestaurantCard {...e.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
