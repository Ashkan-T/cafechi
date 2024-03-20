import React from "react";
import "./food-item.css";

function FoodItem(props: {
  image: any;
  foodName: string;
  count: string;
  price: string;
  description: string;
}) {
  return (
    <article className="food-card">
      <div className="top-background-card">
        <img src={props.image} alt={props.foodName} className="food-image" />
      </div>
      <div className="food-details">
        <h3>{props.foodName}</h3>
        <p>{props.description}</p>
      </div>
      <span className="food-cnt">{props.count}</span>
      <div className="food-price">{props.price}</div>
    </article>
  );
}

export default FoodItem;
