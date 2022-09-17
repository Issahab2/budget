import React, { useState } from "react";

export default function AddExpense({ expenses, setExpenses }) {

    const [newExpense, setNewExpense] = useState({ name: '', cost: 0 })
    const [isNotValidForm, setIsNotValidForm] = useState({ state: false, text: '' })


    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setNewExpense(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (newExpense.name.length < 1 || newExpense.cost < 1) {
            setIsNotValidForm({ state: true, text: 'Name should be at least 1 character length, or Cost should be at least $1' })
            return
        }
        if (expenses.some(obj => obj.name === newExpense.name)) {
            setIsNotValidForm({ state: true, text: 'No duplicates!' })
            return
        }
        setIsNotValidForm(false)
        setExpenses(prev => [...prev, newExpense])
        setNewExpense({ name: '', cost: 0 })
    }


    return <form className="add-expense" onSubmit={handleSubmit}>
        <h2>add expense</h2>
        <div>
            <label htmlFor="name">
                <h3>Name</h3>
                <input
                    id="name"
                    type='text'
                    name="name"
                    className="name"
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
                    className="cost"
                    value={newExpense.cost == 0 ? '' : newExpense.cost}
                    onChange={handleChange}
                    min='1'
                    required='required'
                />
            </label>
        </div>
        <button className="button">Save</button>
        {isNotValidForm.state && <span>{isNotValidForm.text}</span>}
    </form>
}