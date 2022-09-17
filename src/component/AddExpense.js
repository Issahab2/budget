import React, { useState } from "react";

export default function AddExpense({ expenses, setExpenses }) {

    const [newExpense, setNewExpense] = useState({ name: '', cost: 0 })
    const [isNotValidForm, setIsNotValidForm] = useState(false)



    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setNewExpense(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (newExpense.name.length < 1 || newExpense.cost < 1) {
            setIsNotValidForm(true)
            return
        }
        if (expenses.some(obj => obj.name === newExpense.name)) {
            setIsNotValidForm(true)
            return
        }
        setIsNotValidForm(false)
        setExpenses(prev => [...prev, newExpense])
    }


    return <form onSubmit={handleSubmit}>
        <h2>add expense</h2>
        <div>
            <label htmlFor="name">
                <h2>Name</h2>
                <input
                    id="name"
                    type='text'
                    name="name"
                    value={newExpense.name}
                    onChange={handleChange}
                    required='required'
                />
            </label>
            <label htmlFor="cost">
                <h3>Cost</h3>
                <input
                    id="cost"
                    type='number'
                    name="cost"
                    value={newExpense.cost}
                    onChange={handleChange}
                    min='1'
                    required='required'
                />
            </label>
        </div>
        <button>Save</button>
        {isNotValidForm && <span>Name should be at least 1 character length, or Cost should be at least $1</span>}
    </form>
}