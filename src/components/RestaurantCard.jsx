import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
    name, cuisines, cloudinaryImageId, avgRating, costForTwoString, areaName, locality}
  ) => {
      return (
        <div className="w-[250px] h-[420px] p-4 my-5 mx-4 shadow-lg bg-blue-100 hover:bg-amber-50 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
        <img
          className="rounded-md h-32 w-full object-cover"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <h2 className="font-bold text-xl mt-2">{name}</h2>
        <h3 className="text-gray-600">{cuisines.join(", ")}</h3>
        <div className="flex justify-between items-center mt-2">
          <h4 className={`font-semibold ${avgRating >= 4 ? 'text-green-600' : 'text-red-600'}`}>
            {avgRating} ⭐
          </h4>
          <h4 className="text-gray-500">{costForTwoString}</h4>
        </div>
          <h4 className="text-gray-500">{locality}</h4>
          <h4 className="text-gray-500">{areaName}</h4>
      </div>
      );
  };

export default RestaurantCard; 