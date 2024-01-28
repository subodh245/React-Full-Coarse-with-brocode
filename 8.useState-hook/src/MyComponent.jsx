import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("subodh");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const emploeydStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}>Click me</button>

      <p>Age: {age} </p>
      <button onClick={incrementAge}> IncrementAge</button>

      <p>IsEmloyed: {isEmployed ? "Yes" : "No"} </p>
      <button onClick={emploeydStatus}> employee status </button>
    </div>
  );
}
export default MyComponent;
