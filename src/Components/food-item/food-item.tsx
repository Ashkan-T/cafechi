import "./food-item.css";
import { useState } from "react";

function FoodItem(props: {
  image: any;
  foodName: string;
  count: number;
  price: number;
  description: string;
  foodCardMode: any;
}) {
  let foodAvailabilityClass = "available";

  const [foodCount, setFoodCount] = useState(props.count);

  const handleScreenClick = () => {
    if (foodCount < props.count && props.foodCardMode === "increase") {
      setFoodCount(foodCount + 1);
    }
    if (foodCount > 0 && props.foodCardMode === "decrease") {
      setFoodCount(foodCount - 1);
    }
    console.log(foodCount);
  };

  if (props.count === 0) {
    foodAvailabilityClass = "unavailable";
  }

  return (
    <article
      onClick={handleScreenClick}
      className={"food-card " + foodAvailabilityClass}
    >
      <div className="top-background-card">
        <img src={props.image} alt={props.foodName} className="food-image" />
      </div>
      <div className="food-details">
        <h3>{props.foodName}</h3>
        <p>{props.description}</p>
      </div>
      {props.count > 0 && <span className="food-cnt">{foodCount}</span>}
      {props.count < 0 && <span className="food-cnt">&infin;</span>}
      <div className="food-price">{props.price}</div>
    </article>
  );
}

export default FoodItem;
