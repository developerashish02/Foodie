import { useState } from "react";
import Restaurant from "./Restaurant";
import { restaurantsData } from "../utils/mockData";
import SearchRestaurant from "./SearchRestaurant";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const filterRestaurant = restaurantsData;
  return (
    <div className="container bg-[#FFFEFE] mx-auto  w-[80%] my-10">
      <div className="w-full my-8">
        <SearchRestaurant
          handleFilter={setRestaurants}
          filterRes={filterRestaurant}
        />
      </div>

      <div className="flex flex-wrap gap-9">
        {restaurants?.map((restaurant) => (
          <Restaurant key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
