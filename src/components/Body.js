import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestraunat] = useState(resList);
  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter((res) => {
              return res.avgRating > 4.5;
            });
            console.log(filteredList);
            setListofRestraunat(filteredList);
          }}
        >
          TOp Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listofRestaurants.map((restcard) => (
          <RestaurantCard key={resList.id} restdata={restcard} />
        ))}
      </div>
    </div>
  );
};
export default Body;
