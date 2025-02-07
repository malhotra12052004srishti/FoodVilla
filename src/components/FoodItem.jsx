import { IMG_CDN_URL } from "../constant";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  console.log("FoodItem Props:", {
    name,
    description,
    cloudinaryImageId,
    price,
  });

  return (
    <div className="w-[250px] h-[420px] p-4 my-5 mx-4 shadow-lg bg-blue-100 hover:bg-amber-50 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
      <img
        className="rounded-md h-32 w-full object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold text-xl mt-2">{name}</h2>
      <h3 className="text-gray-600">Rupees: {price / 100}</h3>
      <h5 className="text-gray-600">{description}</h5>
    </div>
  );
};

export default FoodItem;