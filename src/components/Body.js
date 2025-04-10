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
          className="m-2 placeholder-grey-50  border  focus:outline-green-600 h-8 w-80 rounded-md outline-0 bg-amber-50  outline-blue-400 "
          placeholder="Search"
          value={searchvalue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            // if (e.target.value == "") {
            //   setFilteredRestaurant(restaurant);
            // }
            // const filterList = filterData(restaurant, e.target.value);
            // setFilteredRestaurant(filterList);
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
