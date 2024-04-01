import React from "react";
import "./food-item.css";
import infinity from "../../images/pngimg.com - symbol_infinity_PNG35.png";

function FoodItem(props: {
  image: any;
  foodName: string;
  count: number;
  price: number;
  description: string;
}) {
  let foodAvailabilityClass = "available";
  let CountSpan = <span className="food-cnt">{props.count}</span>;
  if (props.count === 0) {
    foodAvailabilityClass = "unavailable";
    CountSpan = <></>;
  }
  if (props.count < 0) {
    CountSpan = <img className="food-cnt-infinity" src={infinity} alt="" />;
  }
  return (
    <article className={"food-card " + foodAvailabilityClass}>
      <div className="top-background-card">
        <img src={props.image} alt={props.foodName} className="food-image" />
      </div>
      <div className="food-details">
        <h3>{props.foodName}</h3>
        <p>{props.description}</p>
      </div>
      {CountSpan}
      <div className="food-price">{props.price}</div>
    </article>
  );
}

export default FoodItem;
