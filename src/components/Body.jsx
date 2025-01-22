import restaurantList from "./RestaurantList";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// function filterData(searchInput, restaurants) {
//   const filterData = restaurants.filter((a) =>
//     a?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
//   );
//   return filterData;
// }

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Empty dependency array "[]" => once after the initial render.
  // dependency array is [searchInput] => once after initial render + everytime after render(my searchInput changes).
  // dependency array is [restaurants] => just called once after initial call and will be called if my restaurants will be changed.
  // If we don't pass the dependency array then it (useEffect) will be called after every render.

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
      // The API is fetching the data from the server and returning the response but if the response is not coming just change the API URL as the logic behind the API is correct.
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // console.log(json);
      // Optional chaining
      setAllRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      /*console.log(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );*/
    } catch (error) {
      console.log("Error fetching restaurants: ", error);
    }
  }

  // Conditional rendering
  // If my restaurants array is empty then => Shimmer UI
  // If my restaurants array is not empty then => Show the list of restaurants

  // Not rendered : Early return

  console.log("allRestaurants", allRestaurants);

  console.log("Length", allRestaurants.length);

  if (!allRestaurants) {
    return <h1>OOPS!!! There are no restaurants.</h1>;
  }
  if (filteredRestaurants?.length === 0) {
    return <h1>No Restaurants match your Search</h1>;
  }
  // return allRestaurants.length === 0 ? (
  //   <Shimmer />
  // ) : (
  //   <>
  //     <div className="search-container">
  //       <input
  //         type="text"
  //         className="search-input"
  //         placeholder="Search"
  //         value={searchInput}
  //         onChange={(e) => {
  //           // e.target.value => whatever you write in the input
  //           setSearchInput(e.target.value);
  //         }}
  //       />
  //       <button
  //         className="search-btn"
  //         onClick={() => {
  //           const data = filterData(searchInput, allRestaurants);
  //           // update the filteredRestaurants
  //           setFilteredRestaurants(data);
  //         }}
  //       >
  //         Search
  //       </button>
  //     </div>

  //     <div className="restaurant-list">
  //       {allRestaurants.length > 0 ? (
  //         // Logic for No restraurants found here
  //         filteredRestaurants.map((e) => {
  //           if (e.data) {
  //             return <RestaurantCard {...e.data} key={e.data.id} />;
  //           } else {
  //             console.log("No data found");
  //             return null;
  //           }
  //         })
  //       ) : (
  //         <h1>No data found</h1>
  //       )}
  //     </div>
  //   </>
  // );
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
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))
        ) : (
          <h1>No Restaurants match your Search</h1>
        )}
      </div>
    </>
  );
};

export default Body;
