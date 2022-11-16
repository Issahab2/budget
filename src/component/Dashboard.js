import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Expenses from './Expenses'
import AddExpense from "./AddExpense";




export default function Dashboard() {
    const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('budget')) || { budget: 0 })
    const [spentSoFar, setSpentSoFar] = useState(0)
    const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || [])

    const isBudgetZero = budget.budget === 0 && true
    const [isWritingBudget, setIsWritingBudget] = useState(isBudgetZero)


    function handleSubmit(e) {
        e.preventDefault()
        setIsWritingBudget(false)
    }

    useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(budget))
        localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [budget, expenses])


    return (
        <main>
            {isWritingBudget
                ?
                <div>
                    <form className="set-up-budget" onSubmit={handleSubmit}>
                        <h1>Set up Budget!</h1>
                        <input
                            type='number'
                            name="budget"
                            min='1'
                            value={budget.budget == 0 ? '' : budget.budget}
                            onChange={(e) => setBudget({
                                [e.target.name]: e.target.value
                            })} />
                        <button className="button">SAVE</button>
                    </form>
                </div>
                :
                <>
                    <Navbar
                        budget={budget}
                        setBudget={setBudget}
                        spentSoFar={spentSoFar}
                    />
                    <Expenses
                        expenses={expenses}
                        setExpenses={setExpenses}
                        setSpentSoFar={setSpentSoFar}
                    />
                    <AddExpense
                        expenses={expenses}
                        setExpenses={setExpenses}
                    />
                </>
            }
        </main>
    )
}