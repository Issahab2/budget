import React, { useEffect, useState } from "react";

export default function Expenses({ expenses, setSpentSoFar, setExpenses }) {
  const [search, setSearch] = useState("");

  // For calculating what was spent so far
  const calculateExpenses = expenses
    .map((obj) => Number(obj.cost))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);

  useEffect(() => {
    setSpentSoFar(calculateExpenses);
  }, [setSpentSoFar, calculateExpenses]);

  // Creating Elements from expenses arr[obj]
  // ? maybe you mean this :D

  function searching(e) {
    setSearch(e.target.value);
  }

  function showing(name) {
    const hasName = name.toLowerCase().includes(search.toLowerCase());
    if (hasName) return true;
  }

  // ! fixme: expenses.map !function ERR
  const SingleExpense = () => {
    console.log(expenses);
    return (
      <>
        {expenses
          .map((exp) => {
            const { name, cost } = exp;
            return (
              <div key={name} className="expense" name={name}>
                <p>{name}</p>
                <div>
                  <span className="badge">$ {cost}</span>
                  <button
                    onClick={() => setExpenses((expenses) => expenses.filter((expense) => expense.name !== name))}
                    className="delete-item"
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })
          .filter((expense) => showing(expense.props.name))}
      </>
    );
  };

  return (
    <div className="expenses">
      <input
        type="text"
        name="search"
        className="search"
        onChange={searching}
        value={search}
        placeholder="Search for expense"
      />
      <SingleExpense />
    </div>
  );
}
