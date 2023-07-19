import { restaurantsList } from "../constants";
import ResturantCard from "./restaurantCard";
import Shimmer from "./shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import useIsOnline from "../utils/useIsOnline";

const filterData = (searchInput, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
};

const Body = () => {
  const [allRestuarants, setAllRestaurants] = useState([]) 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards, "jsoonn");
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useIsOnline()

  if(!isOnline){
    return <h1>OOPS Something Went Wrong , Currently You Are Offline</h1>
  }

  if(!allRestuarants) return null

//   if(filteredRestaurants?.length === 0) return <h1>No Search Results Found</h1>
  return allRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" p-5 bg-violet-300 my-5">
        <input
          className="focus:bg-green-50 p-2 m-2"
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-600 hover:bg-gray-500 text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchInput, allRestuarants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
          <Link to={"/restaurant/" + restaurant.data.id }  key={restaurant.data.id} ><ResturantCard {...restaurant.data} /></Link>
        )})}
      </div>
    </>
  );
};

export default Body;
