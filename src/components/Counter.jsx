import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const subtractCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button className="minus" onClick={subtractCount} aria-label="Decrease count">
          –
        </button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={addCount} aria-label="Increase count">
          +
        </button>
      </div>
    </main>
  );
};

export default Counter;
