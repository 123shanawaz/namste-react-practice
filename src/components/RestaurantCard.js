import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { restdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = restdata;
  const { deliveryTime } = restdata.sla;
  return (
    <div className="rest-card ">
      <img
        className="rest-logo"
        alt="rest-logo "
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",'")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
