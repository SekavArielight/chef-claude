import React from "react";

const MainComponent = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListsItem = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredients.push(newIngredient);
    console.log(ingredients);
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. beans"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul>{ingredientsListsItem}</ul>
    </main>
  );
};

export default MainComponent;
