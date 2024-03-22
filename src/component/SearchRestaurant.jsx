import { useState } from "react";

const SearchRestaurant = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  console.log("Render the component");
  return (
    <div className="items-center border-2  py-3 px-6 flex">
      <input
        type="search"
        placeholder="Search for restaurant"
        className=" outline-none w-full font-semibold"
        onChange={handleInputChange}
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default SearchRestaurant;
