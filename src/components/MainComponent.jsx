import React from "react";

const MainComponent = () => {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. beans"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
};

export default MainComponent;
