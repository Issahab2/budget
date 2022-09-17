import React, { useState } from "react";
import Navbar from "./Navbar";
import Expenses from './Expenses'
import AddExpense from "./AddExpense";




export default function Dashboard() {
    const [budget, setBudget] = useState({ budget: 0 })
    const [spentSoFar, setSpentSoFar] = useState(0)
    const [expenses, setExpenses] = useState([{}])

    const isBudgetZero = budget.budget === 0 && true
    const [isWritingBudget, setIsWritingBudget] = useState(isBudgetZero)


    function handleSubmit(e) {
        e.preventDefault()
        setIsWritingBudget(false)
    }


    return (<>
        {isWritingBudget ?
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Set up Budget</h1>
                    <input
                        type='number'
                        name="budget"
                        min='1'
                        value={budget.budget}
                        onChange={(e) => setBudget({
                            [e.target.name]: Number(e.target.value)
                        })} />
                    <button>SAVE</button>
                </form>
            </div> :
            <>
                <Navbar
                    budget={budget}
                    setBudget={setBudget}
                    spentSoFar={spentSoFar} />
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
    </>)
}