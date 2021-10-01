import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const savedExpenseDataHandler = enteredData => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;