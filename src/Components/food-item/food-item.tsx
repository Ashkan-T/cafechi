import { CountControlContext } from "../../App";
import "./food-item.css";
import { useContext, useState } from "react";

function FoodItem(props: {
  image: any;
  foodName: string;
  count: number;
  price: number;
  description: string;
}) {
  let foodAvailabilityClass = "available";

  const foodCardMode = useContext(CountControlContext);
  const [foodCount, setFoodCount] = useState(props.count);

  const handleClick = () => {
    if (foodCardMode > 0) {
      if (foodCount < props.count) {
        setFoodCount(foodCount + 1);
      }
    } else {
      if (foodCount > 0) {
        setFoodCount(foodCount - 1);
      }
    }
    console.log(foodCount);
  };

  if (props.count === 0) {
    foodAvailabilityClass = "unavailable";
  }

  return (
    <article
      onClick={handleClick}
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
