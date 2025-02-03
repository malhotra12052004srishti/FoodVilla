import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart Items from Redux:", cartItems);
  if (cartItems.length === 0) {
    return <h1 className="font-bold text-3xl text-center mt-5">Your cart is empty</h1>;
  }
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id || item.cloudinaryImageId} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
