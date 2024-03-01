import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestraunat] = useState(resList);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING  "
    );
    const json = await data.json();
    // console.log(json);
  };

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
