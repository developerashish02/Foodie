import Restaurant from "./Restaurant";
import SearchRestaurant from "./SearchRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantAndFilter from "../hooks/useRestaurantAndFilter";

const Body = () => {
  const { restaurants, filterRestaurant, setRestaurants } =
    useRestaurantAndFilter();

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
