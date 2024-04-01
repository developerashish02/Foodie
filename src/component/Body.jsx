import { useState, useEffect } from "react";
import { API_RESTAURANTS } from "../utils/constants";
import Restaurant from "./Restaurant";
import SearchRestaurant from "./SearchRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurant, SetFilterRestaurant] = useState([]);

  const getRestaurantData = async () => {
    const response = await fetch(API_RESTAURANTS);
    const data = await response.json();

    const resData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurants(resData);
    SetFilterRestaurant(resData);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  return (
    <div className="container bg-[#fffefe] mx-auto  w-[80%] my-10">
      <div className="w-full my-8">
        <SearchRestaurant
          handleFilter={setRestaurants}
          filterRes={filterRestaurant}
        />
      </div>

      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-9">
          {restaurants?.map((restaurant) => (
            <Link
              to={"/restaurant-menu/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <Restaurant resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
