import React, { useState } from "react";

export default function Navbar({ budget, setBudget, spentSoFar }) {
    const isBudgetZero = budget.budget === 0 && true
    const [isWritingBudget, setIsWritingBudget] = useState(isBudgetZero)


    function handleSubmit(e) {
        e.preventDefault()
        setIsWritingBudget(false)
    }

    return <header>
        <h1>my budget planner</h1>
        <div className="dashboard">
            <div className="budget">
                {isWritingBudget ?
                    <form onSubmit={handleSubmit}>
                        <input
                            type='number'
                            name="budget"
                            min='1'
                            value={budget.budget}
                            onChange={(e) => setBudget({
                                [e.target.name]: Number(e.target.value)
                            })} />
                        <button>SAVE</button>
                    </form> :
                    <div>
                        <p>Budget: ${Number(budget.budget)}</p>
                        <button onClick={() => setIsWritingBudget(true)}>Edit</button>
                    </div>

                }
            </div>
        </div>
        <div className="remaining"><p>Remaining: ${budget.budget - spentSoFar}</p></div>
        <div className="spent"><p>Spent so far: ${spentSoFar}</p></div>
    </header>

}