import Restaurant from "./Restaurant";
import SearchRestaurant from "./SearchRestaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantAndFilter from "../hooks/useRestaurantAndFilter";
import InternetConnection from "./InternetConeection";
import useIsOnline from "../hooks/useIsOnline";

const Body = () => {
  const { restaurants, filterRestaurant, setRestaurants } =
    useRestaurantAndFilter();
  const isOnline = useIsOnline();

  return (
    <div
      className={`container bg-[#fffefe] mx-auto  w-[80%] my-10 ${
        !isOnline ? "pointer-events-none" : ""
      }`}
    >
      {!isOnline && <InternetConnection />}
      <div className="w-full my-8">
        <SearchRestaurant
          handleFilter={setRestaurants}
          filterRes={filterRestaurant}
        />
      </div>

      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div
          className={`flex flex-wrap gap-9  ${
            !isOnline ? "pointer-events-none" : ""
          }`}
        >
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
