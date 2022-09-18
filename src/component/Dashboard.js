import React, { useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import Expenses from "./Expenses";
import Navbar from "./Navbar";

export default function Dashboard() {
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem("budget")) || { budget: 0 });
  const [spentSoFar, setSpentSoFar] = useState(0);
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("expenses")) || []);

  const isBudgetZero = budget.budget === 0 && true;
  const [isWritingBudget, setIsWritingBudget] = useState(isBudgetZero);

  function handleChange(e) {
    setBudget({ [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsWritingBudget(false);
  }

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [budget, expenses]);

  const budgetValue = isBudgetZero ? "" : budget.budget;

  return (
    <main>
      {isWritingBudget ? (
        <div>
          <form className="set-up-budget" onSubmit={handleSubmit}>
            <h1>Set up Budget!</h1>
            <input type="number" name="budget" min="1" value={budgetValue} onChange={handleChange} />
            <button className="button">SAVE</button>
          </form>
        </div>
      ) : (
        <>
          <Navbar
            budget={budget}
            budgetValue={budgetValue}
            setBudget={setBudget}
            spentSoFar={spentSoFar}
            isBudgetZero={isBudgetZero}
            isWritingBudget={isWritingBudget}
            setIsWritingBudget={setIsWritingBudget}
          />
          <AddExpense expenses={expenses} setExpenses={setExpenses} />
          <Expenses expenses={expenses} setExpenses={setExpenses} setSpentSoFar={setSpentSoFar} />
        </>
      )}
    </main>
  );
}
