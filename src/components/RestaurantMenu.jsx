import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // How to read the parameters from the dynamic URL
  const params = useParams();
  const { id } = params;
  // const {resId} = params;

  // For destructuring the object. This will work same as the above code
  // const {id} = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  // Maintaing and Cleaning up the code. Doesn't need to maintain the separate state for this variable "useRestaurant" hook is maintaining that state.
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes")); // {payload: "Grapes"}
  };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="flex-wrap">
      <div className="p-5 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h1 className="text-2xl font-bold mb-2">Restaurant ID : {id}</h1>
          {/* <h1>Restaurant id  {resId}</h1> */}
          <h2 className="text-xl font-semibold mb-2">
            {restaurant?.cards[2]?.card?.card?.info?.name}
          </h2>
          <img
            className="rounded-md h-48 w-48 object-cover mb-2"
            src={
              IMG_CDN_URL +
              restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <h3 className="text-gray-700">
            {restaurant?.cards[2]?.card?.card?.info?.areaName}
          </h3>
          <h3 className="text-gray-700">
            {restaurant?.cards[2]?.card?.card?.info?.city}
          </h3>
          <h3 className="text-gray-700">
            {restaurant?.cards[2]?.card?.card?.info?.avgRating + " stars"}
          </h3>
          <h3 className="text-gray-700">
            {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </h3>
          <p className="text-gray-700">
            {restaurant?.cards[2]?.card?.card?.info?.description}
          </p>
        </div>

        {/* <div>
          <button
            className="p-2 m-5 bg-green-100 cursor-pointer"
            onClick={() => handleAddItem()}
          >
            + Add Item
          </button>
        </div> */}

        <div className="bg-white shadow-md rounded-lg p-5">
          <h1 className="text-2xl font-bold mb-4">Menu</h1>
          <ul data-testid="menu" className="space-y-2">
            {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ? (
              Object.values(
                restaurant.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                  (e) =>
                    e.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                )
              ).map((item, index) => (
                <li
                  key={index}
                  className="bg-blue-100 p-2 rounded-md shadow-sm"
                >
                  {item.card.card.title}{" "}
                  <button
                    data-testid="addBtn"
                    className="p-2 m-5 bg-green-100 cursor-pointer"
                    onClick={() => addFoodItem(item)}
                  >
                    + Add Item
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No menu available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
