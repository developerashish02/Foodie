import Restaurant from "./Restaurant";
import { restaurants } from "../utils/mockData";

const Body = () => {
  return (
    <div className=" container flex justify-center   flex-wrap gap-12  bg-[#FFFEFE] h-screen mx-auto p-9">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant?.info?.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default Body;
