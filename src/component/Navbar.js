import React from "react";

export default function Navbar({ budget, spentSoFar, setIsWritingBudget }) {
  const { budget: budgetValue } = budget;

  const handleClick = () => {
    setIsWritingBudget(true);
  };

  return (
    <header>
      <h1>my budget planner</h1>
      <div className="dashboard">
        <div className="budget">
          <div>
            <p>Budget: $ {Number(budgetValue)}</p>
            <button className="button" onClick={handleClick}>
              Edit
            </button>
          </div>
        </div>

        <div className="spent">
          <p>Spent so far: $ {spentSoFar}</p>
        </div>

        <div className="remaining">
          <p>Remaining: $ {budgetValue - spentSoFar}</p>
        </div>
      </div>
    </header>
  );
}
