import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setValue] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    const titleChangeHandler = e => {
        setEnteredTitle(e.target.value);
        // setValue(prevState => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value
        //     };
        // });
    };

    const amountChangeHandler = e => {
        setEnteredAmount(e.target.value);
        // setValue(prevState => {
        //     return {
        //         ...prevState,
        //         enteredAmount: e.target.value
        //     };
        // });
    };

    const dateChangeHandler = e => {
        setEnteredDate(e.target.value);
        // setValue(prevState => {
        //     return {
        //         ...prevState,
        //         enteredDate: e.target.value
        //     };
        // });
    };

    const submitHandler = e => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2022-01-01" onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>
};

export default ExpenseForm;