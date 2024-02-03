import { element } from "prop-types";
import { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["apple", "mango", "pineapple"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>list of foooodd</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food Name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}
export default MyComponent;
