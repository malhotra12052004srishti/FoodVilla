import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  // Get data from the API
  useEffect(() => {
    getRestaurantInfo();
  }, [id]);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.900965&lng=75.8572758&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    if (!data.ok) {
      console.error("Error fetching data: ", data.statusText);
    }
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  // Return the data
  return restaurant;
};

export default useRestaurant;



/**
 * Some of the key points to remember:
 * 
 * useState: It is a hook that allows you to have state variables in functional components. It returns an array with two elements. The first element is the state variable, and the second element is a function that allows you to update the state variable.
 * 
 * useEffect: It is a hook that allows you to perform side effects in functional components. It takes a function as an argument, which will be executed after the component is rendered. You can also pass an array of dependencies as the second argument to control when the effect should run.
 * 
 * useParams: It is a hook that allows you to access the parameters from the dynamic URL in React Router. You can use it to get the id or any other parameter from the URL.
 * 
 */