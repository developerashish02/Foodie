import RestaurantItemsCard from "./RestaurantItemsCard";

const RestaurantItems = ({ data }) => {
  const { title, itemCards } = data?.card?.card;
  console.log(data?.card?.card);
  return (
    <div className="p-4 m-4 shadow-lg cursor-pointer">
      <div className="flex justify-between ">
        <span className="font-bold text-lg">
          {title} ({itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {itemCards.map((item) => (
        <RestaurantItemsCard data={item} />
      ))}
    </div>
  );
};

export default RestaurantItems;
