import React from "react";

export default function ({ expenses, setSpentSoFar, setExpenses }) {

    const expensesElement = expenses.map(exp => <div key={exp.name} className="expense">
        <p>{exp.name}</p>
        <span className="badge">{exp.cost}</span>
        <button onClick={() => setExpenses(prev => prev.filter(obj => obj.name === exp.name))}>X</button>
    </div>)


    const calculateExpenses = expenses.map(obj => Number(obj.cost)).reduce((acc, curr) => {
        return acc + curr
    }, 0)

    setSpentSoFar(calculateExpenses)


    console.log(calculateExpenses)



    return <div className="expenses">
        {expensesElement}
    </div>
}