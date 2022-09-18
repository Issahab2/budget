import React, { useState } from "react";

export default function AddExpense({ expenses, setExpenses }) {
  const [newExpense, setNewExpense] = useState({ name: "", cost: 0 });
  const [isNotValidForm, setIsNotValidForm] = useState({ state: false, text: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  }

  const { name, cost } = newExpense;

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length < 1 || cost < 1) {
      setIsNotValidForm({
        state: true,
        text: "Name should be at least 1 character length, or Cost should be at least $1",
      });
      return;
    }
    if (expenses.some((expense) => expense.name === name)) {
      setIsNotValidForm({ state: true, text: "No duplicates!" });
      return;
    }
    setIsNotValidForm(false);
    setExpenses((expenses) => [...expenses, newExpense]);
    setNewExpense({ name: "", cost: 0 });
  }

  const expenseValue = cost === 0 ? "" : cost;

  const { state, text } = isNotValidForm;

  return (
    <form className="add-expense" onSubmit={handleSubmit}>
      <h2>add expense</h2>
      <div>
        <label htmlFor="name">
          <h3>Name</h3>
          <input
            id="name"
            type="text"
            name="name"
            className="name"
            value={name}
            onChange={handleChange}
            required="required"
          />
        </label>
        <label htmlFor="cost">
          <h3>Cost</h3>
          <input
            id="cost"
            type="number"
            name="cost"
            className="cost"
            value={expenseValue}
            onChange={handleChange}
            min="1"
            required="required"
          />
        </label>
      </div>
      <button className="button">Save</button>
      {state && <span>{text}</span>}
    </form>
  );
}
