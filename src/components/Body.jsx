import restaurantList from "./RestaurantList";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((a) =>
    a?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Empty dependency array => once after the render.
  // dependency array is [searchInput] => once after initial render + everytime after render(my searchInput changes).
  // dependency array is [restaurants] => just called once after initial call and will be called if my restaurants will be changed.

  // useEffect(() => {
  //     console.log("useEffect")
  // }, [restaurants]);
  // console.log("render");

  // API call should be using empty dependency array
  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.5160865&lng=76.6597776&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      // Optional chaining
      setAllRestaurants(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error fetching restaurants: ", error);
    }
  }
  console.log("render");

  // Conditional rendering
  // If my restaurants array is empty then => Shimmer UI
  // If my restaurants array is not empty then => Show the list of restaurants

  // Not rendered : Early return
  if (!allRestaurants) {
    return <h1>OOPS!!! There are no restaurants.</h1>;
  }
  if (filteredRestaurants?.length === 0) {
    return <h1>No Restaurants match your Search</h1>;
  }
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            // e.target.value => whatever you write in the input
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            // update the filteredRestaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {allRestaurants.length > 0 ? (
          // Logic for No restraurants found here
          filteredRestaurants.map((e) => {
            if (e.data) {
              return <RestaurantCard {...e.data} key={e.data.id} />;
            } else {
              console.log("No data found");
              return null;
            }
          })
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </>
  );
};

export default Body;
