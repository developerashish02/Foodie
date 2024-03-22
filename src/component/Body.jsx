import Restaurant from "./Restaurant";
import { restaurants } from "../utils/mockData";
import SearchRestaurant from "./SearchRestaurant";

const Body = () => {
  return (
    <div className="container bg-[#FFFEFE] mx-auto  w-[80%] my-10">
      <div className="w-full my-8">
        <SearchRestaurant />
      </div>
      <div className="flex flex-wrap gap-9">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
