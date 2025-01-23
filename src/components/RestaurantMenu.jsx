import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // How to read the parameters from the dynamic URL
  const params = useParams();
  const { id } = params;
  // const {resId} = params;

  // For destructuring the object. This will work same as the above code
  // const {id} = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.900965&lng=75.8572758&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
    );
    if(!data.ok){
        console.error("Error fetching data: ", data.statusText);
    }
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        {/* <h1>Restaurant id  {resId}</h1> */}
        <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
        <img
          className="i1"
          src={
            IMG_CDN_URL +
            restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating}</h3>
        <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ? (
            Object.values(
              restaurant.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
                (e) =>
                  e.card?.card?.["@type"] ===
                  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
              )
            ).map((item, index) => <li key={index}>{item.card.card.title}</li>)
          ) : (
            <li>No menu available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
