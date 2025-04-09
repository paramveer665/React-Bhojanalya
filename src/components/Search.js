const Search = () => {
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
  </>;
};
export default Search;
