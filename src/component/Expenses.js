import React, { useState } from "react";

export default function ({ expenses, setSpentSoFar, setExpenses }) {
    const [search, setSearch] = useState('')


    // For calculating what was spent so far
    const calculateExpenses = expenses.map(obj => Number(obj.cost)).reduce((acc, curr) => {
        return acc + curr
    }, 0)

    setSpentSoFar(calculateExpenses)



    // Creating Elements from expenses arr[obj]
    const expensesElement = expenses.map(exp =>
        <div
            key={exp.name}
            className="expense"
            name={exp.name}>
            <p>{exp.name}</p>
            <div>
                <span className="badge">${exp.cost}</span>
                <button
                    onClick={
                        () => setExpenses(prev =>
                            prev.filter(obj => obj.name !== exp.name)
                        )
                    }
                    className="delete-item">
                    X
                </button>
            </div>
        </div>)



    function searching(e) {
        setSearch(e.target.value)
    }

    function showing(name) {
        if (name.toLowerCase().includes(search.toLowerCase())) return true
    }

    return <div className="expenses">
        <input
            type='text'
            name="search"
            className="search"
            onChange={searching}
            value={search}
            placeholder='Search for expense'
        />
        {expensesElement.filter(el => showing(el.props.name))}
    </div>
}