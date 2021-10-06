import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const [showPanel, setPanelState] = useState(false);

    const savedExpenseDataHandler = enteredData => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const panelOpenHandler = () => {
        setPanelState(true);
    };

    const panelCloseHandler = () => {
        setPanelState(false);
    };

    return (
        <div className='new-expense'>
            {showPanel ? <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} onClosePanelClick={panelCloseHandler} />
                : <button onClick={panelOpenHandler}>Create New Expense</button>}
        </div>
    );
};

export default NewExpense;