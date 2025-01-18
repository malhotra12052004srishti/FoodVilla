import restaurantList from "./RestaurantList";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((a) =>
    a.data.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional chaining
    setRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle
      .restaurants);
  }
  console.log("render");

  return (
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
            const data = filterData(searchInput, restaurants);
            // setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((e) => {
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
