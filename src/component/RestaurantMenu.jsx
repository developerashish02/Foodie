import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    // get restaurant menu
    getRestaurantMenu();
  }, []);
  const getRestaurantMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=17024&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      );
      const data = await response.json();
      console.log(data?.data?.cards[2]?.card?.card?.info);
      setRestaurantMenu(data?.data?.cards[2]?.card?.card?.info);
    } catch (error) {
      console.error(error);
    }
  };
  if (restaurantMenu === null) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla: { minDeliveryTime, maxDeliveryTime, lastMileTravelString },
    feeDetails: { totalFee },
  } = restaurantMenu;

  return (
    <div className="p-2 w-2/3  mx-auto my-4">
      <h1 className="font-bold text-2xl"> {name} </h1>
      <div className="bg-gradient-to-t from-gray-200 to-blue-white  rounded-2xl p-4 ">
        <div className="border-2 bg-white p-4 rounded-2xl">
          <div className="font-semibold space-x-2">
            <i className="fa-solid fa-star text-green-500"></i>
            <span>
              {avgRating} ({totalRatingsString})
            </span>{" "}
            -<span> {costForTwoMessage} </span>
          </div>
          <p className="text-orange-600 underline font-semibold mb-2 text-sm">
            {cuisines.join(",")}
          </p>
          <div className="space-y-2 font-semibold mb-2">
            <p>Outlet</p>
            <p>
              {minDeliveryTime} - {maxDeliveryTime} mins
            </p>
          </div>
          <hr />
          <div className="mt-2">
            <span>{lastMileTravelString} </span> |{" "}
            <span>₹ {totalFee / 100} Delivery fee will apply</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
