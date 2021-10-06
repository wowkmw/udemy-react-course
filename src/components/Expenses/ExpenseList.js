import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h3 className='expenses-list__fallback'>No item found!</h3>
    }

    return (
        <ul className='expenses-list'>{props.items.map(
            expense => <ExpenseItem expense={expense} key={expense.id} />
        )}</ul>
    );
};

export default ExpenseList;