import { useState } from "react";

export default function ToggleState() {
  const [isGoingOut, setIsGoingOut] = useState(true);

  const stateToggle = () => {
    // setIsGoingOut(!isGoingOut)
    setIsGoingOut((prev) => !prev);
  };

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={stateToggle}
        className="value"
        aria-label={`Current answer is ${
          isGoingOut ? "Yes" : "No"
        }. Click to change it.`}
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}
